import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fc035a;
  width: 5rem;
  margin: 1rem;
`;

const Button = ({ color = "white", disabled, label = "Click me!", onClick }) => {
  const handleClick = () => {
    alert("Button works!");
    onClick();
  };

  return (
    <StyledButton color={color} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
