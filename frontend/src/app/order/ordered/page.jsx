"use client";
import React, { useEffect, useState } from "react";
import "./history.css";

export default function OrderedPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
    if (history.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all(
      history.map((id) =>
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/orders/${id}/`)
          .then((res) => res.json())
          .catch((err) => null)
      )
    ).then((data) => {
      const filtered = data.filter((item) => item !== null);
      setOrders(filtered);
      setLoading(false);
    });
  }, []);

  return (
    <div className="order-page">
      <div className="order-content">
        <h2>Your Orders</h2>
        {loading ? (
          <p>Loading...</p>
        ) : orders.length === 0 ? (
          <p>No orders found yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-history-box">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Name:</strong> {order.customer_name}</p>
              <p><strong>Address:</strong> {order.customer_address}</p>
              <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
              <div>
                <strong>Items:</strong>
                <ul>
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      🪴 {item.plant} × {item.quantity} — ฿{item.item_price}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
