import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./SingleProducts.css";

const SingleProducts = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to fetch product.");
      }
    };

    getData();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="singleproduct">
      {name && <p>Product Name (from query): {name}</p>}
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <h6>Product ID: {id}</h6>
      <h2>{product.title}</h2> <br />
      <p>
        <strong>Price:</strong> ${product.price}
        <br />
      <p> DESC :{product.description}</p>
        <br />
      </p>
      <button>Buy Now</button>
    </div>
  );
};

export default SingleProducts;
