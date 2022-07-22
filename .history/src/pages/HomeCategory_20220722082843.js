import React from "react";
import { Link } from "react-router-dom";

function HomeCategory(props) {
  const { route, name, description, image } = props;

  return (
    <div className="">
      <Link to={`/category/${route}`}>
        <div className="">
          <img src={image} alt={name} className="" />
        </div>
        <h2 className="">
          <strong>{name}:</strong>
        </h2>
        <p className="">{description}</p>
      </Link>
    </div>
  );
}

export default HomeCategory;
