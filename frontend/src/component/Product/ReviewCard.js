import React from "react";
import profilePng from "../../images/Profile.png";
import { Rating } from "@mui/material";
import "./ReviewCard.css";  

const ReviewCard = ({ review }) => {
  const options = { value: review.rating, readOnly: true, precision: 0.5 };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" className="user-logo" />
      <div className="reviewContent">
        <p className="reviewUserName">{review.name}</p>
        <Rating {...options} />
        <span className="reviewCardComment">{review.comment}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
