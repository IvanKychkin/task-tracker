import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
/*
const ButtonWrapper = styled.div`
  background: #fe74a4;
  position: fixed;
  top: 50px
  display: flex;
  justify-content: flex-end;
  transition: all .25s ease-in-out
`;

const onScroll = () => {
  if (window.scrollY > 10) ?
  set ShowScrollButton
}

useEffect (effect: () => {
  document.addEventListener (type="scroll")
})

      { ShowScrollButton && (
        <ButtonWrapper>
          <Button onClick = {onClick} label="Scroll to top" />
        </ButtonWrapper>
      )}

*/
const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;

const DefaultTemplate = ({ children, Name }) => {
  /* const [ShowScrollButton, setShowScrollButton] = useState ( initialState: false ); */
  return (
    <Container>
      <Header pageName={Name} />
      {children}
      <Footer />
    </Container>
  );
};

export default DefaultTemplate;
