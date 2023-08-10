import React from "react";
import "./Button.css";

const Button = ({ text, icon, className }) => {
  return (
    <button className={`custom-btn ${className}`}>
      {icon && React.cloneElement(icon, { className: "button-icon" })}
      {text}
    </button>
  );
};

export default Button;
