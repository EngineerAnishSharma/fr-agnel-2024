"use client"
import React, { useEffect, useState } from 'react';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Assume fetchProducts is a function that makes the API call
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual API endpoint
      const response = await fetch('https://65d469913f1ab8c634350b5c.mockapi.io/products/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return [];
    }
  };

  return (
    <div className='sm:w-100 md:w-200 lg:w-420 xl:w-460 2xl:560 h-screen bg-gray-200'>
    <div className="flex items-center justify-center flex-col">

    <div class=" mt-20 w-80 h-full border-black border-2 rounded-md hover:shadow-transparent shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
    <div className="max-w-xl h-full w-full bg-white p-6 rounded-lg shadow-lg">
        {Array.isArray(products) && products.length > 0 ? (
          <>
            <img src={products[0].imageUrl} alt={products[0].name} className="w-full h-40 object-cover mb-4 rounded-md shadow-md" />
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">{products[0].name}</h2>
              <p className="text-gray-600">{products[0].weight} g</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-700">Price: ${products[0].price}</p>
              <p className="text-gray-700">Quantity: {products[0].quantity}</p>
            </div>
            <div>
              <p className="text-gray-700">Product ID: {products[0].productId}</p>
              <p className="text-gray-700">Expiry Date: {products[0].expiryDate}</p>
            </div>
            
          </>
        ) : (
          <p className="text-gray-600 text-center">No product found.</p>
        )}
      </div>
    </div>
    <button
     class="h-12 m-12 border-black border-2 p-2.5 bg-zinc-300 hover:bg-zinc-200 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-green-400 rounded-md"
     >
Update
  </button>
    </div>
    
  
    </div>
  );
};

export default ProductTable;
