import React, { useState } from 'react';
import "./ShoppingCart.css"
import shoe from "./shoe.jpg"
import shoe1 from "./shoe1.jpg"
import shoe2 from "./shoe2.jpg"
import shoe3 from "./shoe3.jpg"
import shoe4 from "./shoe4.jpg"
import shoe5 from "./shoe5.jpg"


const ShoppingCart = ( {handleCart} ) => {
  const [items, setItems] = useState([
        {img: shoe, title: "Tennis"}, 
        {img: shoe1, title: "Scarpa"}, 
        {img: shoe2, title: "Hike"},
        {img: shoe3, title: "City"}, 
        {img: shoe4, title: "Outdoor"}, 
        {img: shoe5, title: "Magic"}
  ])
  const [ input, setInput ] = useState("");
  


  return <div className='grid-container'>
    {items.map((item, index)=>
        <div key={index}>
            <div className="wrapper">
              <h3 className="title">{item.title}</h3>
              <div className="item-container">
                <img className="item-img" src={item.img}/>
                <div className="qty-wrapper">
                <div className="quantity">
                <p>Qty</p>
                <input className='qty-input' type="number" onChange={e => setInput(e.target.value)}></input>
                </div>
                <button className="add-btn" onClick={() => handleCart(input)}>Add</button>
                </div>
                
              </div>
            </div>
        </div>
        )}
  </div>;
};

export default ShoppingCart;
