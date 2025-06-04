import React from "react";
import Navbar from "./navbar/navbar.jsx";
import GetProducts from "./products/products.jsx";
import { useState } from "react";
import ListProducts from "./navbar/SingleProducts.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar onSearch={(value) => setSearchTerm(value)} />

      <Routes>
        <Route path="/Home" element={ <h1>Home Page</h1> } />
        <Route path="/" element={<GetProducts searchTerm={searchTerm} />} />
        <Route path="/products" element={<GetProducts searchTerm={searchTerm} />} />
        <Route path="/products/:id" element={<ListProducts />} />
        <Route path="/About" element={<h1>My Name is Mustafa Khan</h1>} />
      </Routes>
    </>
  );
}

export default App;
