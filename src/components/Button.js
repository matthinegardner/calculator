import React from "react";
import "../styles/Button.css";

const isOperator = val => !isNaN(val) || val === "." || val === "=";

const Button = props => (
  <div
    className={`button ${isOperator(props.children) ? "" : "operator"}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
