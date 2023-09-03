import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/dumb.png";
import { Link } from "react-router-dom";

const Navbar = ({activeLink,setActiveLink}) => {

  
  return (
    <div className="layout">
      <nav className="sticky-navbar">
        <div className="logo" onClick={()=>setActiveLink('Home')}>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>
          <h1>FITNESS</h1>
          </Link>
        </div>

        <ul className="nav-links">
          <Link to='/' style={{textDecoration:'none',color:'white'}}><li className={activeLink === 'Home' ? 'active' : " "} onClick={()=>setActiveLink('Home')}>Home</li></Link>
          <Link to='/exercise/0977'  style={{textDecoration:'none',color:'white'}}><li className={activeLink === 'Exercise' ? 'active' : " "} onClick={()=>setActiveLink('Exercise')}>Exercise</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
