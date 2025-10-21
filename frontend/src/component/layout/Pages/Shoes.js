import React from "react";
import { Link } from "react-router-dom";
import auraItems from "../../../data/auraItems";

function Shoes() {
  const products = auraItems.shoes || [];

  const categories = {
    "Aura Premium Edition Shoes": ["Aura Luxe Runner", "Aura Elite Street", "Aura Apex Trainer", "Aura Signature Pro"],
    "Casuals": ["Aura Casual Sliders", "Aura Trendy Sneakers"],
  };

  return (
    <div className="page-container">
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h1>{category}</h1>
          <div className="grid">
            {products
              .filter((product) => categories[category].includes(product.name))
              .map((product) => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="card">
                    <div className="product-image">
                      <img
                        src={product.images[0].url}
                        alt={product.name}
                        style={{
                          width: "100%",
                          maxWidth: "150px",
                          height: "auto",
                          marginBottom: "10px",
                        }}
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shoes;
