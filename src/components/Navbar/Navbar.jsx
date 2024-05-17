import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {

const [menu,setmenu]=useState("Home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li onClick={()=>setmenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
        <li onClick={()=>setmenu("Contact")} className={menu==="Contact"?"active":""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
