import React from "react";
import "./StepProgress.css";

export default function StepProgress({ currentStep }) {
  const steps = ["Order", "Address", "Payment", "Confirm", "Successful!"];

  return (
    <div className="step-progress">
      {steps.map((step, index) => (
        <div className="step-container" key={index}>
          <div 
            className={`step-circle ${currentStep >= index ? "active" : ""}`}
          ></div>
          {index < steps.length - 1 && (
              <div 
                className={`step-line ${currentStep > index ? "active" : ""} ${currentStep === index ? "gradient" : ""}`}
              ></div>
            )}
          <p className={`step-label ${currentStep >= index ? "active" : ""}`}>
            {step}
          </p>
          
        </div>
      ))}
    </div>
  );
}
