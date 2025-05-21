import React from 'react'
import {  useState , useEffect } from "react";
import axios from 'axios';
// import styles from "./products.module.css";

const Products = () => {
   const [products, setProducts] = useState([]);

      const getData = async () => { 
        try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products");
    console.log("Response:", response.data);
    setProducts(response.data);
    console.log("Products:", products);
        }
        catch (error) {
            console.log("Error fetching products:", error);
        }
      }
       
      useEffect(() => {
         getData(); 
         console.log("Products fetched");  
        },[]);
  
  
      return (
     <div>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map((product) => (
       <div>
            <div key={product.id} className="card">
                <img src={product.images[0]} alt={product.title} className="image" />
                <h2 className="title">{product.title}</h2>
                <p className="price">${product.price}</p>
                <p className="description">{product.description}</p>
            </div>
            </div>
            ))
      )}
    </div>
  );
}

export default Products
