import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #ffb2cd;
  width: 100%;
  height: 20px;
  padding-top: 2px;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return <StyledFooter>Ivan Kychkin</StyledFooter>;
};

export default Footer;
