import React, { useEffect, useState } from "react";
import api from "../api";
import "./Order.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api
      .get("/allOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="orders-container">
      <h3>Orders</h3>

      {orders.length === 0 ? (
        <p>No orders placed yet</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td
                  style={{
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
