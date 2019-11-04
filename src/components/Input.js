import React from "react";
import "../styles/Input.css";

const Input = props => (
    <div id={props.id} className="input">
        {props.children}
    </div>
);

export default Input;
