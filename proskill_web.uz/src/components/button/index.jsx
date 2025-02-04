import React from "react";
import "./styles.sass";

const Button = ({ className, children, type }) => {
  return (
    <button
      className={`btn ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
