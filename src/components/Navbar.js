import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineInstagram,
} from "react-icons/ai";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <section className=" nav-container">
        <div className="navbar section-center">
          <div className="left">
            <Link to="/" className="link">
              Home
            </Link>

            <Link to="/shop" className="link">
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
      </section>
    </nav>
  );
};

export default Navbar;
