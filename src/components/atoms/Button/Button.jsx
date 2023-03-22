import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #c4a6fc;
    display: flex;
    flew-flow: column wrap;
`;

const Button = ({ color = "black", disabled, label = "button text" }) => {
    return (
        <StyledButton color={color} disabled={disabled}>
            {label}
        </StyledButton>
    );
};
export default Button;
