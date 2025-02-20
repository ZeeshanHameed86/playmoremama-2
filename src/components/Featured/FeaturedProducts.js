import React from "react";
import "./featured.css";
import sideline1 from "../../assets/sideline-left.png";
import sideline2 from "../../assets/sideline-right.png";
import bottle1 from "../../assets/bottle2.webp";
import complements from "../../assets/complements.webp";
import sensoryJar from "../../assets/Sensory-Jars.webp";
import leaf from "../../assets/Leaf.png";
import rainbow2 from "../../assets/Rainbow-2.webp";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <img src={sideline1} alt="" className="featured-sideline-img-1" />
      <img src={sideline2} alt="" className="featured-sideline-img-2" />
      <h1 className="featured-title">SENSORY PRODUCTS</h1>
      <img src={rainbow2} alt="" className="rainbow" />
      <div className="single-featured-detail single-featured-detail-1">
        <div className="featured-img-container">
          <div className="featured-img-shadow"></div>
          <Link to="/products">
            <img src={sensoryJar} alt="" className="jar-header" />
          </Link>
        </div>
        <div className="featured-text">
          <h2>Sensory Jars</h2>
          <p>
            Whether it's dangerously racing cars to the finish line, preparing
            award winning cupcakes, or testing your luck with dragons, our
            sensory jars bring the fun to hands-on-learning.
          </p>
        </div>
      </div>
      <div className="single-featured-detail single-featured-detail-2">
        <div className="featured-img-container">
          <div className="featured-img-shadow"></div>
          <Link to="/products">
            <div className="shaker-header">
              <img src={bottle1} alt="" />
            </div>
          </Link>
        </div>
        <div className="featured-text">
          <h2>Sensory Shakers</h2>
          <p>
            Want to see your favorite colors dance? Shake away and watch as
            stars, letters, and more, dazzle from top to bottom. Yes, babies
            love it, but so do nervous nail-biting husbands. (I know from
            experience!)
          </p>
        </div>
      </div>
      <div className="single-featured-detail single-featured-detail-3">
        <div className="featured-img-container">
          <div className="featured-img-shadow cherry"></div>
          <img src={leaf} alt="" className="leaf" />
          <Link to="/products">
            <div className="complement-header">
              <img src={complements} alt="" className="complement-header" />
            </div>
          </Link>
        </div>
        <div className="featured-text">
          <h2>Complements</h2>
          <p>
            Six-Sided Stamps, Dough-Tools, Stickers and more! Open-ended play is
            already so much fun. These are just the cherry on top.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
