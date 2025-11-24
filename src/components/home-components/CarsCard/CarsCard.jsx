import React from "react";
import { Link } from "react-router-dom";

const CarsCard = ({ car }) => {
  const { image, id } = car;
  return (
    <Link to={`/cars/${id}`} className="w-full  h-[]300px">
      <img src={image} alt="" />
      sas
    </Link>
  );
};

export default CarsCard;
