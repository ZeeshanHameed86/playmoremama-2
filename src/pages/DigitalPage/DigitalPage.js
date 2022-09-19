import React from "react";
import "./digital-page.css";
import { Navbar, MainFooter } from "../../components";
import download from "../../assets/download.jpg";

const DigitalPage = () => {
  return (
    <>
      <Navbar offset={0} />
      <section className="digital-page">
        <div className="digital-download">
          <img src={download} alt="" />
          <button type="button">Free Download</button>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default DigitalPage;
