import React from "react";
import "../Style/Alert.css";

export default function Alert({ alert }) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    alert && (
      <div className="alert-container">
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show pop-alert`}
          role="alert"
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      </div>
    )
  );
}
