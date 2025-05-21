import React from "react";
import styles from "./navbar.module.css";
const Navbar = () => {


  return (
<>

    <div className={styles.navbar}>
      <p>ZENITH ZONE 🏠</p>
      <input type="text" name="" id="" placeholder="Search ... 🔍	" />
      <div>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PRODUCTS</a>
      </div>
    </div>
{/* //products card */}

<div>
    {/* <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
    </div> */}
</div>

    </>
  );
};

export default Navbar;
