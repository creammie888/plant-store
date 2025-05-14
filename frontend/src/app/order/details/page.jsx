"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./details.css";

export default function OrderDetailsPage() {
    const router = useRouter();

    const handleConfirmAddress = () => {
      router.push("/order/payment");
    };
    return (
        <div className="order-page">
            <div className="order-container3">
                <div className="input-address">
                    <p>Name</p>
                    <input type="text" placeholder="Enter your full name"/> 
                </div>
                <div className="input-address">
                    <p>Phone Number</p>
                    <input type="" placeholder="Enter your phone number (e.g., 0812345678)"/> 
                </div>
                <div className="input-address">
                    <p>Address</p>
                    <input type="text" placeholder="House number, Street, Sub-district"/> 
                </div>
                <div className="input-address2">
                    <div className="input-address">
                        <p>Province</p>
                        <input type="text" placeholder="Enter your province"/> 
                    </div>
                    <div className="input-address">
                        <p>District</p>
                        <input type="text" placeholder="Enter your district"/> 
                    </div>
                    <div className="input-address">
                        <p>ZIP/Postal Code</p>
                        <input type="text" placeholder="Enter your postal code"/> 
                    </div>
                </div>
                <button className="btn-continue" onClick={handleConfirmAddress}>
                    Confirm Address
                </button>
            </div>
        </div>

    );
}