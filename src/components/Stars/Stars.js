import React, { useState } from "react";
import "./stars.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Stars = ({ stars, setStars }) => {
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setStars(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  const totalStars = Array(5).fill(0);

  return (
    <div className="stars">
      {totalStars.map((__, index) => {
        return (
          <FaStar
            key={index}
            size={24}
            style={{ marginRight: 10, cursor: "pointer" }}
            color={(hoverValue || stars) > index ? colors.orange : colors.grey}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default Stars;
