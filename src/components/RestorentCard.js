import React from "react";
import { CDN_URL } from "../util/constant";

const RestorentCard = ({ resData }) => {
  const url ="https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-recipe-580x870.jpg"
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="res-card">
      <img className="res-logo" src={url} alt="res-img" />

     <div>
     <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
     </div>
    </div>
  );
};

export default RestorentCard;
