// src/component/Cart/CartItemCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="cartItem">
      <img src={item.image} alt={item.name} />
      <div className="cartDetails">
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <p>Price: ₹{item.price}</p>
        <p>Qty: {item.quantity}</p>
        <button onClick={() => deleteCartItems(item.product)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItemCard;
