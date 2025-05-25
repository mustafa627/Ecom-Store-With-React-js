import React from 'react'
import Navbar from './navbar/navbar.jsx'
import GetProducts from './products/products.jsx'
import  {useState } from "react";
function App() {
  const [ searchTerm , setSearchTerm ] = useState("")
  return (
    <>
    <Navbar onSearch={(value) =>  setSearchTerm(value)}/>
    <GetProducts searchTerm={searchTerm}/>
    </>
  )
}

export default App
