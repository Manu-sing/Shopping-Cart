import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About"
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import "./App.css"


function App() {

  const [cart, setCart] = useState(0);

 function handleCart(inp) {
   setCart(cart + parseFloat(inp))
 }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cart={cart}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShoppingCart handleCart={handleCart}/>} />
          <Route path="/about" element={<About />} />
          <Route
          path="*"
          element={<h3>There's nothing here!</h3>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
