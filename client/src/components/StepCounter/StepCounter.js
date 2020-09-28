import React from "react";
import "./StepCounter.css";

export default function StepCounter(props) {
  return (
    <div className="steps">
      <div className={props.step1 ? "active" : ""}>Introduction</div>
      <div className={props.step2 ? "active" : ""}>Enter Details</div>
      <div className={props.step3 ? "active" : ""}>Select Card</div>
    </div>
  );
}
