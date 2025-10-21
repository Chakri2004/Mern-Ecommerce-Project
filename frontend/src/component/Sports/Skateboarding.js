import React from "react";
import { Link } from "react-router-dom";
import auraItems from "../../data/auraItems";

const Skateboarding = () => {
  const products = auraItems.skateboarding || [];

  return (
    <div style={{ padding: "30px" }}>
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

export default Skateboarding;
