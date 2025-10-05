import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedProducts.css";

const products = [
  { name: "Dallas Mavericks Jersey", price: "₹ 5,995", image: "https://via.placeholder.com/200x250" },
  { name: "Lakers Icon Jersey", price: "₹ 5,995", image: "https://via.placeholder.com/200x250" },
  { name: "Men's NBA T-Shirt", price: "₹ 1,795", image: "https://via.placeholder.com/200x250" },
  { name: "Stephen Curry Warriors Jersey", price: "₹ 5,995", image: "https://via.placeholder.com/200x250" },
];

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts">
      <h2>Featured Products</h2>
      <div className="productsGrid">
        {products.map((prod, index) => (
          <div className="productCard" key={index}>
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
            <Link to="/products">
              <button>Shop</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
