import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <RouterLink to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
          Home
        </RouterLink>
        <ScrollLink 
          to="explore-menu" 
          smooth={true} 
          duration={500} 
          onClick={() => setMenu("Menu")} 
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </ScrollLink>
        <ScrollLink 
          to="app-download" 
          smooth={true} 
          duration={500} 
          onClick={() => setMenu("Mobile-App")} 
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </ScrollLink>
        <ScrollLink 
          to="footer" 
          smooth={true} 
          duration={500} 
          onClick={() => setMenu("Contact")} 
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </ScrollLink>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
