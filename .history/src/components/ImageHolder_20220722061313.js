import React from "react";
import { Link } from "react-router-dom";

import "./ImageHolder.css";

const ImageHolder = ({ title, image, pathTo }) => {
  return (
    <div className="menWomenFootwear">
      <span>{title}</span>
      <Link to={pathTo} style={{ textDecoration: "none" }}>
        <img className="image" src={image} alt="" />
        <div className="">
          <span className="">Click here to View All</span>
        </div>
      </Link>
    </div>
  );
};

export default ImageHolder;
