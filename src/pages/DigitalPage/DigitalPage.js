import React from "react";
import "./digital-page.css";
import { Navbar, MainFooter } from "../../components";
import img from "../../assets/download.webp";
import img2 from "../../assets/download-2.webp";
import downloadFile from "../../assets/download.pdf";
import downloadFile2 from "../../assets/download2.pdf";

const DigitalPage = () => {
  return (
    <>
      <Navbar offset={0} />
      <section className="digital-page">
        <div className="digital-download">
          <img src={img} alt="" />
          <a
            href={downloadFile}
            download="File.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Free Download
          </a>
        </div>
        <div className="digital-download">
          <img src={img2} alt="" />
          <a
            href={downloadFile2}
            download="File.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Free Download
          </a>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default DigitalPage;
