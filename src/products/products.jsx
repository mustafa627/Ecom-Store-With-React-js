import React from 'react'
import {  useState , useEffect } from "react";
import axios from 'axios';
import styles from "./products.module.css";



const GetProducts  =  ({searchTerm}) => {
  const [ products , setProducts]  = useState([])

  useEffect(()=> {
    getData(searchTerm)
  }, [searchTerm])

  const getData  = async  (searchTerm) => {
    try{
   const response = await axios.get("https://fakestoreapi.com/products/")
   console.log("response", response.data);
    if (searchTerm) {
      const filteredProducts =  response.data.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      setProducts(response.data);
    }
    } catch(err){
      console.log("error", err.message);
    }
  
   
  }

return (
  <div className={styles.productList}>
    {products.map((product) => (
      <div key={product.id} className={styles.card}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
      </div>
    ))}
  </div>
);;


}
export default GetProducts
