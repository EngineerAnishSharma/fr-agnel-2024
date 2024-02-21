"use client";
import ImageUpload from "@/components/ui/Image-upload";
import { detectEmptySpaces } from "@/lib/imageSpaceChecker";
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (image) {
        try {
          const data = await detectEmptySpaces(image);
          setResult(data);
          console.log(data);
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      }
    };

    fetchData();
  }, [image]);

  return (
    <div
      className="w-full h-auto "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh", // Increased height for better display
        flexDirection: "column",
        overflow: "auto", // Enable scrolling if content overflows
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "20px",
          border: "2px dashed white",
          background: "black",
          borderStyle: "dashed",
          borderColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px", // Rounded corners
          color: "white", // Text color
          fontSize: "1.5rem", // Text size
          textAlign: "center", // Center text horizontally
          cursor: "pointer", // Show pointer cursor on hover
          transition: "background-color 0.3s", // Smooth transition on background color change
          padding: "20px", // Added padding for better spacing
        }}
      >
        <input
          className="target"
          accept="image/*"
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              setImage(e.target.files[0]);
            }
          }}
        />
      </div>
      <div>
        {result && result.predictions && (
          <div style={{ display: "flex", gap: "50px" }}>
            <div
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={image ? URL.createObjectURL(image) : undefined}
                alt="Profile Image"
              />
            </div>
            <div>
              <p>Time: {result.time}</p>
              <p>Image Width: {result.image.width}</p>
              <p>Image Height: {result.image.height}</p>
              <p>Predictions:</p>
              <ul>
                {result.predictions.map((prediction: any, index: number) => (
                  <>
                    <li key={index}>
                      <p>X: {prediction.x}</p>
                      <p>Y: {prediction.y}</p>
                      <p>Width: {prediction.width}</p>
                      <p>Height: {prediction.height}</p>
                      <p>Confidence: {prediction.confidence}</p>
                      <p>Class: {prediction.class}</p>
                      <p>Class ID: {prediction.class_id}</p>
                      <p>Detection ID: {prediction.detection_id}</p>
                    </li>

                    <br />
                    <br />
                  </>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
