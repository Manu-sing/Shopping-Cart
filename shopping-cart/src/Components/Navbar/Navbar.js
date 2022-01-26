import React from "react";
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Odin from "./Odinlogo.png"
import { FaShoppingCart} from 'react-icons/fa';


const Navbar = ({ cart }) => {
  let iconStyle = { color: "white"}
  return <div className="navbar">
    <NavLink to="/"><div className="logo"><img src={Odin} className="img"></img></div></NavLink>
    <div className="links">
        <ul >
        <li >
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
        </li>
        <li >
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
        </li>
        <li >
            <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Shop</NavLink>
        </li>
        <div className="shop"><FaShoppingCart className="icon" size={20} style={iconStyle} /><p style={{color: "white"}}>{cart}</p></div>
      </ul>
      
    </div>
  </div>;
};

export default Navbar;
