import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import logo from "../assets/Logo.png";
import { useEffect } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className={`${toggle ? "menu-slide slide-in" : "menu-slide"}`}>
        <div className="exit-btn">
          <BiExit onClick={menuToggle} />
        </div>
        <Link to="/" className="link" onClick={menuToggle}>
          Home
        </Link>

        <Link to="/products" className="link" onClick={menuToggle}>
          Shop
        </Link>

        <Link to="/faqs" className="link" onClick={menuToggle}>
          FAQ
        </Link>
        <div className="mobile-nav-socials">
          <AiOutlineSearch className="icon" />
          <AiOutlineShoppingCart className="icon" />
          <AiOutlineInstagram className="icon" />
        </div>
      </div>
      <div className="navbar section-center">
        <div className="left-mobile">
          <img src={logo} alt="" />
        </div>
        <div className="right-mobile">
          <AiOutlineMenu className="menu-btn" onClick={menuToggle} />
        </div>
        <div className="left">
          <Link to="/" className="link">
            Home
          </Link>

          <Link to="/products" className="link">
            Shop
          </Link>

          <Link to="/faqs" className="link">
            FAQ
          </Link>
        </div>
        <div className="middle">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <AiOutlineSearch className="icon" />
          <AiOutlineShoppingCart className="icon" />
          <AiOutlineInstagram className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
