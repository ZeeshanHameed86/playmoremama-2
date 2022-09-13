import React from "react";
import soon from "../assets/Coming Soon.png";

const DigitalPage = () => {
  return (
    <div>
      <img
        src={soon}
        alt=""
        style={{
          width: "80vw",
          height: "80vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default DigitalPage;
