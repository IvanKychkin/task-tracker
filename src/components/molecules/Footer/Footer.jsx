import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background: #d1d1d1;
    padding: 0.5rem 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px;
    text-align: center;
`;

const Footer = () => {
    return <StyledFooter>by Ivan Kychkin</StyledFooter>;
};

export default Footer;