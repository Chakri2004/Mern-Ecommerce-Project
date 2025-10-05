import React from "react";
import auraItems from "../../../data/auraItems";

const FindStore = () => {
  return (
    <div className="page-container">
      <h1>Find a Store</h1>
      <div className="grid">
        {auraItems.findAStore.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(item.mapUrl, "_blank")}
          >
            <h3>{item.name}</h3>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindStore;
