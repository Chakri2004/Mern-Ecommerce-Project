import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";  

const products = [
  { _id: "nf1", name: "Aura Premium Jacket Mens", price: 12500, image: "/images/jacket-mens.jpg" },
  { _id: "nf2", name: "Aura Premium Jacket Womens", price: 12500, image: "/images/jacket-womens.jpg" },
  { _id: "nf3", name: "Aura Limited Edition Mens Watch", price: 22000, image: "/images/watch-mens.jpg" },
  { _id: "nf4", name: "Aura Limited Edition Womens Watch", price: 22000, image: "/images/watch-womens.jpg" },
  { _id: "nf5", name: "Aura Classic Bag Womens", price: 9500, image: "/images/bag-womens.jpg" },
  { _id: "nf6", name: "Aura Classic Bag Mens", price: 9500, image: "/images/bag-mens.jpg" },
  { _id: "nf7", name: "Aura Sunglasses Mens", price: 7000, image: "/images/sunglass-mens.jpg" },
  { _id: "nf8", name: "Aura Sunglasses Womens", price: 7000, image: "/images/sunglass-womens.jpg" },
];

const Products = () => {
  return (
    <div className="productsPage">
      <div className="shopBanner">
        <h1>🛍️ Welcome to Aura Shop</h1>
        <p>Discover your favourite premium collection</p>
      </div>
      <div className="productsGrid">
        {products.map((item) => (
          <div className="productCard" key={item._id}>
            <Link to={`/product/${item._id}`}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
