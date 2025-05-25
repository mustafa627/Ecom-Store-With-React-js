import React from "react";
import styles from "./navbar.module.css";
const Navbar = ({ onSearch }) => {


  return (
<>

    <div className={styles.navbar}>
      <p>ZENITH ZONE 🏠</p>
      <input type="text" name="" id="" placeholder="Search ... 🔍	"
      onChange={(e) => onSearch(e.target.value)}/>
      <div>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PRODUCTS</a>
        <button className={styles.button}>Login</button>
      </div>
    </div>

    </>
  );
};

export default Navbar;
