import React from "react";
import sideline1 from "../assets/Sideline-1-2.png";
import sideline2 from "../assets/Sideline-2-2.png";

const Value = () => {
  return (
    <section className="value">
      <img src={sideline1} alt="" className="intro-sideline-img-1" />
      <img src={sideline2} alt="" className="intro-sideline-img-2" />
      <div className="value-details section-center">
        <h1>
          At playmoremama we do it right so you can play more and worry less.{" "}
          <br />
          <br />
          Taste-safe handcrafted playdough made with organic coconut oil and
          oven-baked flour. <br />
          <br /> Carefully curated products created for meaningful hands-on
          learning. <br />
          <br /> And travel-size, so fun is never left behind.
        </h1>
      </div>
    </section>
  );
};

export default Value;
