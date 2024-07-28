import React from 'react'

import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Productlist from './component/Productlist.js'

function App() {
  const product =[
    {Price:10000,
      productname:"iphone12",
      Quantity:0,
     },
     {
      Price:1000,
      productname:"key",
      Quantity:0,
     },
     {Price:100000,
      productname:"car",
      Quantity:0,
     },
     { Price:1500,
      productname:"Bathroom",
      Quantity:0,
     }
  ]
  return (
    <>
    <Navbar/> 
    < Productlist product={product}/>
    
    </>
  );
}

export default App;
