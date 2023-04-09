import React from "react";
import styled from "styled-components";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import ScrollToTopButton from "../../molecules/ScrollToTopButton/ScrollToTopButton";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

const DefaultTemplate = ({ children, Name }) => {
  return (
    <Container>
      <ScrollToTopButton />
      <Header pageName={Name} />
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
