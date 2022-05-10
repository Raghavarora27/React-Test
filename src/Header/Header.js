import React from 'react'
import logo1 from "../Assets/logo1.png";
import "./Header.css"

const Header = () => {
  return (
    <div style={{display:"flex"}}>
        <img src={logo1} className="logo1" alt="logo"></img>
        <span className='category'>Category</span>
        <span className='FAQs'>FAQs</span>
        <span className='mycart'>My Cart</span>
        <button>Login</button>
    </div>
  )
}

export default Header