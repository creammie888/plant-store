"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./success.css";

export default function SuccessPage() {
  const router = useRouter();
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // ✅ ดึง order_id ที่เพิ่งสั่ง
    const id = localStorage.getItem("lastOrderId");
    if (id) {
      setOrderId(id);
      localStorage.removeItem("lastOrderId");
    }

    // ✅ ล้างข้อมูลที่ไม่ต้องใช้แล้ว
    localStorage.removeItem("cart");
    localStorage.removeItem("discount");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
  }, []);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="success-container">
      <div className="success-icon">
        <div className="circle"></div>
        <div className="pulse-background1"></div>
        <div className="pulse-background2"></div>
        <div className="circle2">
          <svg className="checkmark" viewBox="0 0 24 24">
            <path d="M6 12 Q8 14, 10 16 Q14 10, 18 8" className="check" />
          </svg>
        </div>
      </div>
      <div className="success-box">
        <h1>Successful!</h1>
        <p className="success-p1">
          Your Order is{" "}
          <span>
            {orderId ? `no.${orderId}` : "processing..."}
          </span>
        </p>
        <p className="success-p2">Thank you for shopping with us</p>
        <button className="btn-continue" onClick={handleBack}>
          Go Back to Shopping
        </button>
      </div>
    </div>
  );
}
