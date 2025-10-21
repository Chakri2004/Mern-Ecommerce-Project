import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const history = useHistory();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="ordersPage">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="ordersContainer">
          {orders.map((order) => (
            <div className="orderCard" key={order.id}>
              <div className="orderRow">
                <strong>Order ID:</strong> {order.id}
              </div>
              <div className="orderRow">
                <strong>Items:</strong> {order.items}
              </div>
              <div className="orderRow">
                <strong>Total:</strong> ₹{order.total}
              </div>
              <div className="orderRow">
                <strong>Payment Method:</strong> {order.paymentMethod.toUpperCase()}
              </div>
              <div className="orderRow">
                <strong>Status:</strong>{" "}
                <span
                  className={
                    order.status === "Delivered"
                      ? "statusDelivered"
                      : "statusConfirmed"
                  }
                >
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="backHomeBtn" onClick={() => history.push("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Orders;
