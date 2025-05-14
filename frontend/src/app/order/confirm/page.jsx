"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./confirm.css";
import "@/app/order/order.css";

export default function ConfirmOrderPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  
    const storedAddress = JSON.parse(localStorage.getItem("shippingAddress"));
    setAddress(storedAddress);
  
    const storedPayment = localStorage.getItem("paymentMethod");
    setPaymentMethod(storedPayment || "cash");
  
    const storedDiscount = localStorage.getItem("discount");
    setDiscount(parseFloat(storedDiscount) || 0);
  }, []);
  

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const deliveryFee = 200;
  const total = subtotal - discountAmount + deliveryFee;

  const handleConfirmOrder = () => {
    // 📌 ตรงนี้สามารถส่ง order ไป backend ได้
    router.push("/order/success");
  };

  return (
    <div className="order-page">
      <div className="order-container1">
        {cartItems.map((item) => (
          <div className="order-card" key={item.id}>
            <div className="order-info">
              <img src={`/plants/${item.image_path}`} alt={item.name} />
              <p><span>{item.name}</span> <br /> ฿{item.price}</p>
            </div>
            <p>x {item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="order-container2">
        <div className="confirm-info">
          <h2>Address</h2>
          {address ? (
            <p>{address.name} <br />
              {address.detail}, {address.district}, {address.province}, {address.zip} <br />
              {address.phone}
            </p>
          ) : <p style={{ color: "#aaa" }}>No address provided</p>}
        </div>

        <div className="line"></div>

        <div className="confirm-info">
          <h2>Payment</h2>
          <p>{paymentMethod === "card"
            ? "Credit Card"
            : paymentMethod === "promptpay"
              ? "PromptPay"
              : "Cash on Delivery"}
          </p>
        </div>

        <div className="line"></div>

        <div className="price-box">
          <div className="price-info">
            <p>Sub Total</p>
            <p>{subtotal} THB</p>
          </div>
          <div className="price-info">
            <p>Discount</p>
            <p>{discountAmount} THB</p>
          </div>
          <div className="price-info">
            <p>Delivery Fee</p>
            <p>{deliveryFee} THB</p>
          </div>
          <div className="net-price">
            <p>Total</p>
            <p>{total} THB</p>
          </div>
        </div>

        <button className="btn-continue" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
