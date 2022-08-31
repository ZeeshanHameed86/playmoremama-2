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
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Navbar = ({ offset }) => {
  const [toggle, setToggle] = useState(false);
  const [fixed, setFixed] = useState();

  const menuToggle = () => {
    setToggle(!toggle);
  };

  const sidebar = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", ease: "linear", duration: 0 },
    },
    exit: {
      x: "1000%",
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setFixed(window.scrollY);
    });
  }, []);

  return (
    <nav
      style={
        offset === 0
          ? { position: "fixed" }
          : fixed >= offset
          ? { position: "fixed" }
          : {}
      }
    >
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={sidebar}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="menu-slide"
          >
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
              <div className="cart-icon">
                <div
                  className="cart-items"
                  style={{ background: "white", color: "red" }}
                >
                  <p>1</p>
                </div>
                <AiOutlineShoppingCart className="icon" />
              </div>
              <AiOutlineInstagram className="icon" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navbar section-center">
        <div className="left-mobile">
          <img src={logo} alt="" />
        </div>
        <div className="right-mobile">
          <div className="cart-icon">
            <div className="cart-items">
              <p>1</p>
            </div>

            <AiOutlineMenu className="menu-btn" onClick={menuToggle} />
          </div>
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
          <div className="cart-icon">
            <div className="cart-items">
              <p>1</p>
            </div>
            <AiOutlineShoppingCart className="icon" />
          </div>
          <AiOutlineInstagram className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
