from flask import Flask, request, jsonify
import os
import easyocr
import numpy as np
import google.generativeai as genai
# from genai import TextGenerativeModel

import PIL
from flask_cors import CORS
from pyngrok import ngrok  # Import Ngrok from pyngrok
import nest_asyncio

from transformers import pipeline
import json
import pickle

genai.configure(api_key="AIzaSyAMBoESvU1tZn_3U1eWtp_9HRDbVf3XQ5c")

app = Flask(__name__)
CORS(app)
reader = easyocr.Reader(['en'], gpu=False)

@app.route('/', methods=['GET'])
def start():
    return "Hello"

@app.route('/artistfetch', methods=['POST'])
def artistfetch():
    try:
        image_file = request.files['image']
        image_file.save("temp_image.jpg")
        img = PIL.Image.open('temp_image.jpg')
        model = genai.GenerativeModel('gemini-pro-vision')
        prompt = "Extract all the information of handcrafted goods from the following text without any special characters or numbers"
        result = model.generate_content([prompt, img], stream=True)
        result.resolve()
        os.remove("temp_image.jpg")
        return jsonify({'result': result.text})
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 500

@app.route('/artistocr', methods=['POST'])
def geminiocr():
    try:
        image_file = request.files['image']
        image_file.save("temp_image.jpg")
        img = PIL.Image.open('temp_image.jpg')
        model = genai.GenerativeModel('gemini-pro-vision')
        result = model.generate_content([img, "Extract all material which is present in the image without any special characters or numbers, just use commas as separators between the goods"], stream=True)
        result.resolve()
        os.remove("temp_image.jpg")
        return jsonify({'result': result.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
# Extract all material information from the image without any special characters or numbers, just use commas as separators between the goods
@app.route('/artisthistory', methods=['POST'])
def artist_history():
    try:
        image_file = request.files['image']
        print(image_file)
        image_file.save("temp_image.jpg")
        img = PIL.Image.open('temp_image.jpg')
        model = genai.GenerativeModel('gemini-pro-vision')
        prompt = "Identify the given artician product and tell us about history of it without any special characters or numbers"
        result = model.generate_content([prompt, img], stream=True)
        result.resolve()
        os.remove("temp_image.jpg")
        return jsonify({'result': result.text})
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)}), 500
    
    
    
# Load sentiment analysis pipeline
classifier = pipeline('sentiment-analysis')
def analyze_reviews(reviews):
    total_reviews = len(reviews)
    positive_count = 0
    negative_count = 0
    
    # Analyze each review
    for review in reviews:
        result = classifier(review)
        sentiment = result[0]['label']
        if sentiment == 'POSITIVE':
            positive_count += 1
        elif sentiment == 'NEGATIVE':
            negative_count += 1
    
    # Calculate percentages
    positive_percentage = (positive_count / total_reviews) * 100
    negative_percentage = (negative_count / total_reviews) * 100
    
    # Return percentages
    return {
        "positive_percentage": positive_percentage,
        "negative_percentage": negative_percentage
    }
    
@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        # Get JSON data from the request
        data = request.get_json()

        # Check if 'reviews' key is present in the JSON
        if 'reviews' not in data:
            return jsonify({"error": "'reviews' key is missing in the JSON"}), 400

        reviews = data['reviews']

        # Perform sentiment analysis
        result = analyze_reviews(reviews)

        return jsonify(result)

    except Exception as e:
        return jsonify({"error": str(e)}), 500




if __name__ == '__main__':
    print("Starting Python flask Server...")
    ngrok_tunnel = ngrok.connect(5000)
    print('Public URL:', ngrok_tunnel.public_url)
    nest_asyncio.apply()
    # load_saved_artifacts()
    app.run()

