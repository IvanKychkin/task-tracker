import React from "react";
import styled from "styled-components";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

const DefaultTemplate = ({ children, Name }) => {
  return (
    <Container>
      <Header pageName={Name} />
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
