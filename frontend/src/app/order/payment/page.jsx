"use client";
export const dynamic = "force-dynamic"; 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaWallet, FaMoneyBillWave } from "react-icons/fa";
import "./payment.css";

export default function OrderPaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const router = useRouter();
  const [expiry, setExpiry] = useState("");

  const handleConfirmPayment = () => {
    // 🔐 บันทึกวิธีจ่ายเงิน
    localStorage.setItem("paymentMethod", paymentMethod);
    router.push("/order/confirm");
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
      setExpiry(value);
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setCvv(value);
    }
  };

  return (
    <div className="order-page">
      <div className="order-container3">
        <div className="payment-methods">
          <button
            className={`payment-option ${paymentMethod === "card" ? "active" : ""}`}
            onClick={() => setPaymentMethod("card")}
          >
            <div className="icon-payment"><FaCreditCard /><br /><p>Card</p></div>
          </button>
          <button
            className={`payment-option ${paymentMethod === "promptpay" ? "active" : ""}`}
            onClick={() => setPaymentMethod("promptpay")}
          >
            <div className="icon-payment"><FaWallet /><br /><p>PromptPay</p></div>
          </button>
          <button
            className={`payment-option ${paymentMethod === "cash" ? "active" : ""}`}
            onClick={() => setPaymentMethod("cash")}
          >
            <div className="icon-payment"><FaMoneyBillWave /><br /><p>Cash on Delivery</p></div>
          </button>
        </div>

        {/* Form แต่ละวิธี */}
        {paymentMethod === "card" && (
          <div className="payment-container">
            <div className="input-address">
              <p>Name on Card</p>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="input-address">
              <p>Card Number</p>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="Enter your card number"
                maxLength={19}
              />
            </div>
            <div className="input-address2">
              <div className="input-address">
                <p>Expiry Date</p>
                <input
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div className="input-address">
                <p>CVV</p>
                <input
                  type="text"
                  value={cvv}
                  onChange={handleCvvChange}
                  placeholder="Security Code (CVV)"
                  maxLength={4}
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "promptpay" && (
          <div className="payment-container">
            <p className="header-payment">PromptPay</p>
            <p>Scan the QR code with your mobile banking app.</p>
            <img src="/myqr.png" alt="PromptPay QR Code" className="payment-pic" />
          </div>
        )}

        {paymentMethod === "cash" && (
          <div className="payment-container">
            <p className="header-payment">Cash on Delivery (COD)</p>
            <p>You will pay the delivery person when you receive the order.</p>
            <img src="/COD2.png" alt="cod-img" className="payment-pic" />
          </div>
        )}

        <button className="btn-continue" onClick={handleConfirmPayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
