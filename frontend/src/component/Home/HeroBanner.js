import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="bannerContent">
        <h1>Aura. Keep Going</h1>
        <p>Only one way to find out.</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="bannerImage">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Hero Banner"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
