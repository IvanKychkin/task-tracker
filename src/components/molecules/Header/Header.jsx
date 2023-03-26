import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #fe74a4;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
`;

const Header = ({ pageName }) => {
  return <StyledHeader>Task Tracker | {pageName}</StyledHeader>;
};

export default Header;
