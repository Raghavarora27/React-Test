import React from "react";
import "./Footer.css";
import logo1 from "../Assets/logo1.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo1} alt="logo"></img>
      <span className="support">Support</span>
      <span className="Terms">Terms & Conditions</span>
      <span className="about">About Us</span>
      <span className="refund">Return & Refund Policy</span>
      <span className="privacy">Privacy Policy</span>
      <span className="shipping">Shipping & Delivery Policy</span>
      <span className="end">Sea Basket I All Rights Reserved I 2021 Copyright</span>
    </div>
  );
};

export default Footer;
