import React from "react";
import { useHistory } from "react-router-dom";
import "./ShopBySport.css";

const ShopBySport = () => {
  const history = useHistory();

  const auraSports = [
    { name: "Basketball", image: "/images/sports/basketball.png", path: "/collection/basketball" },
    { name: "Football", image: "/images/sports/football.png", path: "/collection/football" },
    { name: "Running", image: "/images/sports/running.png", path: "/collection/running" },
    { name: "Badminton", image: "/images/sports/badminton.png", path: "/collection/badminton" },
    { name: "Tennis", image: "/images/sports/tennis.png", path: "/collection/tennis" },
    { name: "Cricket", image: "/images/sports/cricket.jpg", path: "/collection/cricket" },
    { name: "Golf", image: "/images/sports/golf.png", path: "/collection/golf" },
    { name: "Rugby", image: "/images/sports/rugby.png", path: "/collection/rugby-shoes" },
    { name: "SkateBoarding", image: "/images/sports/skateboarding.png", path: "/collection/skateboarding-shoes" }
  ];

  const goToSport = (path) => history.push(path);

  return (
    <div className="shop-by-sport">
      <h2 className="section-title">Shop by Sport</h2>
      <div className="sports-carousel">
        {auraSports?.map((sport, idx) => (
          <div
            key={idx}
            className="sport-card"
            onClick={() => goToSport(sport.path)}
          >
            <img src={sport.image} alt={sport.name} className="sport-image" />
            <h3>{sport.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBySport;
