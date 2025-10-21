import React from "react";
import { Link } from "react-router-dom";
import auraItems from "../../data/auraItems";

const SportCollection = ({ sport }) => {
  const products = auraItems[sport] || [];

  if (products.length === 0) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>{sport.charAt(0).toUpperCase() + sport.slice(1)} Collection</h1>
        <p>No items found for {sport}!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        {sport.charAt(0).toUpperCase() + sport.slice(1)} Collection
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
          justifyItems: "center",
        }}
      >
        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={product.images[0].url}
                alt={product.name}
                style={{ width: "100%", height: "auto", marginBottom: "10px" }}
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportCollection;
