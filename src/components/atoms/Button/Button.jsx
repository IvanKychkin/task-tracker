import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
    color: ${color};
    background: #fc035a;
    width: 5rem;
    margin: 1rem;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    border: 1.2px solid #696969;
    box-shadow: rgba(100, 100, 111, 0.4) 0px 5px 20px 0px;
  `,
);

const Button = ({ color = "white", disabled, onClick = () => {}, children }) => {
  const handleClick = () => {
    alert("Button works!");
    onClick();
  };

  return (
    <StyledButton color={color} disabled={disabled} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
