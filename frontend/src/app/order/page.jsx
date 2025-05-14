// pages/order.js
"use client";

import React, { useState } from "react";
import "./order.css";
import Link from "next/link";

export default function OrderPage() {

  //จำลองดาต้า
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Sansevieria", price: 200, quantity: 1 },
    { id: 2, name: "Bacopa monnieri", price: 200, quantity: 1 },
    { id: 3, name: "Peace Lily", price: 200, quantity: 1 },
  ]);

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);


  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const deliveryFee = 200;
  const total = subtotal - discountAmount + deliveryFee;


  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };





  return (
    <div className="order-page">
      <div className="order-container1">

      {cartItems.map((item) => (
        <div className="order-card" key={item.id}>
          <div className="order-info">
            <img src={`./bg/${item.id}.png`} alt="pic" />
            <p><span>{item.name}</span> <br /> ฿{item.price}</p>
          </div>
          <div className="btn-quantity">
            <button className="btn-add-delete" onClick={() => handleDecrease(item.id)}>-</button>
            <p>{item.quantity}</p>
            <button className="btn-add-delete" onClick={() => handleIncrease(item.id)}>+</button>
          </div>
        </div>
      ))}
        
        
        
        
      </div>
      <div className="order-container2">
        <h2>Orders Summary</h2>
        <div className="discount-box">
          <input type="text" placeholder="Discount Code" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)}/>
          <button onClick={applyDiscount}>Apply</button>
        </div>
        <div className="price-box">
          <div className="price-info">
            <p>Sub Total</p>
            <p>{subtotal} THB</p>
          </div>
          <div className="price-info">
            <p>Discount</p>
            <p>{discount*subtotal} THB</p>
          </div>
          <div className="price-info">
            <p>Delivery Fee</p>
            <p>{deliveryFee} THB</p>
          </div>

          {/* <div className="line1"></div> */}
          
          <div className="net-price">
            <p>Total</p>
            <p>{total} THB</p>
          </div>
        </div>
        <Link href="/order/details">
          <button className="btn-continue">Continue</button>
        </Link>
      </div>
    </div>
  );
}
