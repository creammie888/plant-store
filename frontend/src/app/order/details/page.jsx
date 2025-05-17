"use client";
export const dynamic = "force-dynamic"; 
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./details.css";

export default function OrderDetailsPage() {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [zip, setZip] = useState("");

  const handleConfirmAddress = () => {
    const newErrors = {};
  
    if (!name) newErrors.name = "Please enter your name";
    if (!phone) newErrors.phone = "Please enter your phone number";
    if (!address) newErrors.address = "Please enter your address";
    if (!province) newErrors.province = "Please enter your province";
    if (!district) newErrors.district = "Please enter your district";
    if (!zip) newErrors.zip = "Please enter your postal code";
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) {
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
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>
        <div className="input-address">
          <p>Phone Number</p>
          <input
            type="text"
            placeholder="Enter your phone number (e.g., 0812345678)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
        <div className="input-address">
          <p>Address</p>
          <input
            type="text"
            placeholder="House number, Street, Sub-district"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={errors.address ? "input-error" : ""}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>
        <div className="input-address2">
          <div className="input-address">
            <p>Province</p>
            <input
              type="text"
              placeholder="Enter your province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              className={errors.province ? "input-error" : ""}
            />
            {errors.province && <p className="error-text">{errors.province}</p>}
          </div>
          <div className="input-address">
            <p>District</p>
            <input
              type="text"
              placeholder="Enter your district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className={errors.district ? "input-error" : ""}
            />
            {errors.district && <p className="error-text">{errors.district}</p>}
          </div>
          <div className="input-address">
            <p>ZIP/Postal Code</p>
            <input
              type="text"
              placeholder="Enter your postal code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className={errors.zip ? "input-error" : ""}
            />
            {errors.zip && <p className="error-text">{errors.zip}</p>}
          </div>
        </div>
        <button className="btn-continue" onClick={handleConfirmAddress}>
          Confirm Address
        </button>
      </div>
    </div>
  );
}
