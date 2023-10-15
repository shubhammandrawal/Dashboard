import React from "react";
import "./chart.css";

export default function Chart() {
  return (
    <div className="expenses">
      <div className="expenses-filter">
        <div>
          <label>Overview</label>
          <span>Monthly Earning</span>
        </div>
        <select>
          <option>Quaterly</option>
          <option>Half year</option>
        </select>
      </div>
      
    </div>
  );
}
