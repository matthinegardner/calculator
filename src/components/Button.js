import React from "react";
import "../styles/Button.css";
import classnames from "classnames";

const Button = props => {
    const buttonSize =
        props.children === "Clear" || props.children === "="
            ? "button-double"
            : "button";
    const deleteButton = props.children === "Del" ? "button-delete" : "";
    const operatorButton = props.operator ? "operator" : "";
    const cn = classnames(buttonSize, operatorButton, deleteButton);
    return (
        <div
            id={props.id}
            className={cn}
            onClick={() =>
                props.handleClick(
                    props.operator ? props.operator : props.children
                )
            }
        >
            {props.children}
        </div>
    );
};

export default Button;
