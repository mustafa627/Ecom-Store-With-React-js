import React from "react";
import styles from "./navbar.module.css";
import { Link, Route, Routes } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <>
      <div className={styles.navbar}>
        <p>ZENITH ZONE 🏠</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search ... 🔍	"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/products/:id">Products</Link>
          <Link to="/About">About</Link>
          <button className={styles.button}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
