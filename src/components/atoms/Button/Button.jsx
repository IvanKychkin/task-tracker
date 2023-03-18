import React from "react";
//import styled from "styled-components";

const Button = ({ disbaled, onCLick, label : string = "button text", color : string = "black"}) => {
    return (
        <styledButton color={color} disabled={disabled} onCLick={onClick}>
            {label}
        </styledButton>
    );
};
export default Button;