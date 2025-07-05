import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./products.module.css";
import { Link } from "react-router-dom";
import SingleProducts from "../navbar/SingleProducts";
import { useNavigate } from "react-router-dom";

const GetProducts = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleClick = (event) => {
    const id = event.target.id;
    console.log("id", id);
    navigate(`/products/${id}`, { state: { clickedId: id } });
  };
  useEffect(() => {
    getData(searchTerm);
  }, [searchTerm]);

  const getData = async (searchTerm) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      console.log("response", response.data);
      if (searchTerm) {
        const filteredProducts = response.data.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      } else {
        setProducts(response.data);
      }
    } catch (err) {
      console.log("error", err.message);
    }
  };

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <Link key={product.id} to={`/products/${product.id}`}></Link>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
          <h2 className={styles.title}>{product.title}</h2>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <button id={product.id} onClick={handleClick}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};
export default GetProducts;
