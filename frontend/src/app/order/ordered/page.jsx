"use client";
export const dynamic = "force-dynamic"; 
import React, { useEffect, useState } from "react";
import originalProducts from "@/data/products";
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
        fetch(`https://plantshop-backend.onrender.com/api/plants/orders/${id}/`)
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
      <h2>Your Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>No orders found yet.</p>
      ) : (
        orders.map((order) => {
          const totalPrice = order.items.reduce(
            (sum, item) => sum + item.item_price * item.quantity,
            0
          );
          return (
            <div key={order.id} className="order-content">
              <div className="history-card-color">
                <div className="history-card">
                  <div className="step-process">
                    <div className="icon-process">
                      <div className="circle-process"></div>
                      <div className="line-process"></div>
                      <div className="circle-process"></div>
                      <div className="line-process"></div>
                      <div className="circle-process"></div>
                    </div>
                    <div className="text-process">
                      <p>Processing</p>
                      <p>Shipping</p>
                      <p>Delivered</p>
                    </div>
                  </div>
                  <div className="order-history-container">
                    <div className="order-history-info">
                      <p><strong>Order ID:</strong> {order.id}</p>
                      <p><strong>Name:</strong> {order.customer_name}</p>
                      <p><strong>Address:</strong> {order.customer_address}</p>
                      <p><strong>Date:</strong> {new Date(order.created_at).toLocaleString()}</p>
                    </div>
                    <div className="order-history-box">
                      <ul>
                        {order.items.map((item, idx) => (
                          <div key={idx} className="order-history">
                            <div className="order-left">
                              <img src={`/plants/${item.image_path}`} alt="image" />
                              <p>{item.plant} <br />฿{item.item_price}</p>
                            </div>
                            <p className="order-Right">× {item.quantity}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="summary-box">
                  <p>in process</p>
                  <p>total : {(totalPrice + 200).toFixed(2)} THB</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
