import React from "react";
import sideline1 from "../assets/Sideline-1.png";
import sideline2 from "../assets/Sideline-2.png";
import headerimg from "../assets/Header-image.jpg";
import rainbowimg from "../assets/Rainbow.png";

const Header = () => {
  return (
    <header>
      <img src={sideline1} alt="" className="header-sideline-img-1" />
      <img src={sideline2} alt="" className="header-sideline-img-2" />
      <div className="header-container">
        <div className="image-container">
          <img src={headerimg} alt="" className="header-img" />
        </div>
        <h3>Monterey Bay, CA</h3>
        <div className="rainbow-img-container">
          <img src={rainbowimg} alt="" className="rainbow-img" />
        </div>
        <div className="header-info">
          <h1>Welcome</h1>
          <h2>Sensory Play for All Ages</h2>
          <button type="button" className="header-btn">
            Shop Now!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
