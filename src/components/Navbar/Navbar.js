import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
import { ImCross } from "react-icons/im";
import logo from "../../assets/Logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useProductsContext } from "../../context/products_context";

const Navbar = ({ offset }) => {
  const [toggle, setToggle] = useState(false);
  const [fixed, setFixed] = useState();
  const { total_quantity } = useProductsContext();

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
              <ImCross onClick={menuToggle} />
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
            <Link to="/digital" className="link" onClick={menuToggle}>
              FREE
            </Link>
            <div className="mobile-nav-socials">
              <AiOutlineSearch className="icon" />
              <div className="cart-icon">
                <div
                  className="cart-items"
                  style={{ background: "white", color: "red" }}
                >
                  <p>{total_quantity}</p>
                </div>
                <Link to="/cart">
                  <AiOutlineShoppingCart className="icon" />
                </Link>
              </div>
              <a href="https://www.instagram.com/play.more.mama/">
                <AiOutlineInstagram className="icon" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="navbar section-center">
        <div className="left-mobile">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right-mobile">
          <div className="cart-icon">
            <div className="cart-items">
              <p>{total_quantity}</p>
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
          {/* <AiOutlineSearch className="icon" /> */}
          <Link to="/digital" className="link" onClick={menuToggle}>
            FREE
          </Link>
          <div className="cart-icon">
            <div className="cart-items">
              <p>{total_quantity}</p>
            </div>
            <Link to="/cart">
              <AiOutlineShoppingCart className="icon" />
            </Link>
          </div>
          <a href="https://www.instagram.com/play.more.mama/">
            <AiOutlineInstagram className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
