import React from "react";
import "./digital-page.css";
import { Navbar, MainFooter } from "../../components";
import download from "../../assets/download.jpg";
import { saveAs } from "file-saver";

const DigitalPage = () => {
  const downloadFile = () => {
    saveAs("./download.pdf", "Free Download.pdf");
  };

  return (
    <>
      <Navbar offset={0} />
      <section className="digital-page">
        <div className="digital-download">
          <img src={download} alt="" />
          <button type="button" onClick={downloadFile}>
            Free Download
          </button>
        </div>
      </section>
      <MainFooter />
    </>
  );
};

export default DigitalPage;
