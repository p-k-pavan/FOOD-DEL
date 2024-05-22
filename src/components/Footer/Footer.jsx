import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest is to satisfy your cravings and elevate your
            dining experience, one delicious meal at a time.
          </p>
          <div className="footer-social-media">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About as</li>
            <li>Dilvery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+11 326598633</li>
            <li>tomota.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copy-right">Copyright 2024
Tomato.com All Right Reserved.</p>

    </div>
  );
};

export default Footer;
