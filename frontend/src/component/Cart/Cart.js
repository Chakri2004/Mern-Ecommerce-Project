import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    if (quantity < stock) dispatch(addItemsToCart(id, quantity + 1));
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) dispatch(addItemsToCart(id, quantity - 1));
  };

  const deleteCartItems = (id) => dispatch(removeItemsFromCart(id));

  const checkoutHandler = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 300; 
    const total = subtotal + shippingFee;

    localStorage.setItem(
      "orderInfo",
      JSON.stringify({ subtotal, shippingFee, total })
    );

    history.push("/shipping");
  };


  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography>No Product in Your Cart</Typography>
        </div>
      ) : (
        <div className="cartPage">
          <div className="cartHeader">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {cartItems.map((item) => (
            <div className="cartContainer" key={item.product}>
              <CartItemCard item={item} deleteCartItems={deleteCartItems} />

              <div className="cartInput">
                <button onClick={() => decreaseQuantity(item.product, item.quantity)}>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => increaseQuantity(item.product, item.quantity, item.stock)}>+</button>
              </div>

              <p className="cartSubtotal">{`₹${item.price * item.quantity}`}</p>
            </div>
          ))}

          <div className="cartGrossProfit">
            <div></div>
            <div className="cartGrossProfitBox">
              <p>Gross Total</p>
              <p>{`₹${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}`}</p>
            </div>
            <div></div>
            <div className="checkOutBtn">
              <button onClick={checkoutHandler}>Check Out</button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
