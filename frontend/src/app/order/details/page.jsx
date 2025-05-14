"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./details.css";

export default function OrderDetailsPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [zip, setZip] = useState("");

  const handleConfirmAddress = () => {
    if (!name || !phone || !address || !province || !district || !zip) {
      alert("Please fill in all fields.");
      return;
    }

    const shippingAddress = {
      name,
      phone,
      address,
      province,
      district,
      zip,
    };

    localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
    router.push("/order/payment");
  };

  return (
    <div className="order-page">
      <div className="order-container3">
        <div className="input-address">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-address">
          <p>Phone Number</p>
          <input
            type="text"
            placeholder="Enter your phone number (e.g., 0812345678)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-address">
          <p>Address</p>
          <input
            type="text"
            placeholder="House number, Street, Sub-district"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-address2">
          <div className="input-address">
            <p>Province</p>
            <input
              type="text"
              placeholder="Enter your province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div className="input-address">
            <p>District</p>
            <input
              type="text"
              placeholder="Enter your district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div className="input-address">
            <p>ZIP/Postal Code</p>
            <input
              type="text"
              placeholder="Enter your postal code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <button className="btn-continue" onClick={handleConfirmAddress}>
          Confirm Address
        </button>
      </div>
    </div>
  );
}
