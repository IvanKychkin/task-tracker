import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background: #fe74a4;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const StyledPageTitle = styled.div`
  flex-basis: 90%;
`;

const Header = ({ pageName }) => {
  return (
    <StyledHeader>
      <StyledPageTitle>Task Tracker | {pageName}</StyledPageTitle>
      <StyledLink to="/projects">Projects</StyledLink>
      <StyledLink to="/">Home</StyledLink>
    </StyledHeader>
  );
};

export default Header;
