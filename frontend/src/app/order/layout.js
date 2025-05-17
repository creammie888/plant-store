// src/order/layout.js
"use client"

import React from "react";
import CartSwitch from "../../../components/CartSwitch";
import StepProgress from "../../../components/StepProgress";
import "../../../components/StepProgress.css";
import "../../../styles/globals.css";
import "./order.css";
import { usePathname } from "next/navigation";

export default function OrderLayout({ children }) {
    const path = usePathname();
    let activeTab = "cart";
    let currentStep = 0;

    if (path.includes("/order/ordered")) {
        activeTab = "ordered";

    } else {
        if (path.includes("/order/details")) currentStep = 1;
        if (path.includes("/order/payment")) currentStep = 2;
        if (path.includes("/order/confirm")) currentStep = 3;
        if (path.includes("/order/success")) currentStep = 4;
    }
    return (
        <div className="order-layout">
        <CartSwitch activeTab={activeTab} />
        {activeTab === "cart" && <StepProgress currentStep={currentStep} />}
        <div className="order-content">
            {children}
        </div>
        </div>
    );
}
