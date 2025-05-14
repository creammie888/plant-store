"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./confirm.css";
import "@/app/order/order.css";
import "@/app/order/order.css";

export default function ConfirmOrderPage() {
    const router = useRouter();

    const handleConfirmOrder = () => {
        router.push("/order/success");
      };
    
     const [cartItems, setCartItems] = useState([
       { id: 1, name: "Sansevieria", price: 200, quantity: 1 },
       { id: 2, name: "Bacopa monnieri", price: 200, quantity: 2 },
       { id: 3, name: "Peace Lily", price: 200, quantity: 1 },
     ]);
   
     const [discountCode, setDiscountCode] = useState("");
     const [discount, setDiscount] = useState(0);
     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
     const discountAmount = subtotal * discount;
     const deliveryFee = 200;
     const total = subtotal - discountAmount + deliveryFee;
   
   

    return (
        <div className="order-page">
                <div className="order-container1">
                    {cartItems.map((item) => (
                        <div className="order-card" key={item.id}>
                            <div className="order-info">
                                <img src={`/bg/${item.id}.png`} alt="pic" />
                                <p><span>{item.name}</span> <br /> ฿{item.price}</p>
                            </div>
                            <p>x {item.quantity}</p>
                        </div>
                    ))}
                </div>
            <div className="order-container2">
                <div className="confirm-info">
                    <h2>Address</h2>
                    <p>Mr.Somwang <br />11/111 KlongNeung KlongLuang Pathumthani 12120 <br />010-1234-1234</p>
                </div>
                <div className="line"></div>
                <div className="confirm-info">
                    <h2>Payment</h2>
                    <p>cash on delivery</p>
                </div>
                <div className="line"></div>
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