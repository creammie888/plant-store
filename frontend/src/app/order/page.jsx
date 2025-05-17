"use client";
export const dynamic = "force-dynamic"; 
import React, { useState, useEffect } from "react";
import "./order.css";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const deliveryFee = cartItems.length > 0 ? 200 : 0;
  const total = subtotal - discountAmount + deliveryFee;

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const updateLocalStorage = (items) => {
    setCartItems(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleIncrease = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateLocalStorage(updated);
  };

  const handleDecrease = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateLocalStorage(updated);
  };

  const handleContinue = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add at least 1 item.");
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("discount", JSON.stringify(discount));
    router.push("/order/details");
  };

  return (
    <div className="order-page">
      <div className="order-container1">
        {cartItems.map((item) => (
          <div className="order-card" key={item.id}>
            <div className="order-info">
              <img src={`/plants/${item.image_path}`} alt={item.name} />
              <p>
                <span>{item.name}</span> <br /> ฿{item.price}
              </p>
            </div>
            <div className="btn-quantity">
              <button
                className="btn-add-delete"
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className="btn-add-delete"
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        {cartItems.length === 0 && (
          <p className="empty-cart-msg">Your cart is empty.</p>
        )}
      </div>

      <div className="order-container2">
        <h2>Orders Summary</h2>
        <div className="discount-box">
          <input
            type="text"
            placeholder="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button onClick={applyDiscount}>Apply</button>
        </div>
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
        <button
          className="btn-continue"
          onClick={handleContinue}
          disabled={cartItems.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
