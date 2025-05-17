"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./confirm.css";
import "../../../app/order/order.css";

export default function ConfirmOrderPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    setAddress(JSON.parse(localStorage.getItem("shippingAddress")));
    setPaymentMethod(localStorage.getItem("paymentMethod") || "cash");
    setDiscount(parseFloat(localStorage.getItem("discount")) || 0);
  }, []);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const deliveryFee = 200;
  const total = subtotal - discountAmount + deliveryFee;

  const handleConfirmOrder = async () => {
    if (!address || cartItems.length === 0) {
      alert("Missing address or cart data.");
      return;
    }

    const payload = {
      customer_name: address.name,
      customer_address: `${address.address}, ${address.district}, ${address.province}, ${address.zip}`,
      payment_method: paymentMethod,
      items: cartItems.map(item => ({
        plant_id: item.id,
        quantity: item.quantity,
        item_price: item.price,
      })),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/plants/orders/create/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit order");

      const data = await response.json();

      // ✅ เก็บ order_id ล่าสุด
      localStorage.setItem("lastOrderId", data.order_id);

      // ✅ บันทึก order_id ลงประวัติ
      const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
      history.push(data.order_id);
      localStorage.setItem("orderHistory", JSON.stringify(history));

      // ✅ ล้างข้อมูล
      localStorage.removeItem("cart");

      router.push("/order/success");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <div className="order-page">
      <div className="order-container1">
        {cartItems.map((item) => (
          <div className="order-card" key={item.id}>
            <div className="order-info">
              <img src={`/plants/${item.image_path}`} alt={item.name} />
              <p><span>{item.name}</span><br />฿{item.price}</p>
            </div>
            <p>x {item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="order-container2">
        <div className="confirm-info">
          <h2>Address</h2>
          {address ? (
            <p>
              {address.name}<br />
              {address.address}, {address.district}, {address.province}, {address.zip}<br />
              {address.phone}
            </p>
          ) : <p style={{ color: "#aaa" }}>No address provided</p>}
        </div>

        <div className="line"></div>

        <div className="confirm-info">
          <h2>Payment</h2>
          <p>
            {paymentMethod === "card" ? "Credit Card"
              : paymentMethod === "promptpay" ? "PromptPay"
              : "Cash on Delivery"}
          </p>
        </div>

        <div className="line"></div>

        <div className="price-box">
          <div className="price-info"><p>Sub Total</p><p>{subtotal} THB</p></div>
          <div className="price-info"><p>Discount</p><p>{discountAmount} THB</p></div>
          <div className="price-info"><p>Delivery Fee</p><p>{deliveryFee} THB</p></div>
          <div className="net-price"><p>Total</p><p>{total} THB</p></div>
        </div>

        <button className="btn-continue" onClick={handleConfirmOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
}
