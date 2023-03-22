import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const StyledMainContent = styled.main`
  background: #fec8da;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
`;

const MainContent = () => {
  return (
    <>
      <StyledMainContent>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledMainContent>
      <StyledMainContent>Deserunt accusantium voluptates sed fuga?</StyledMainContent>
      <StyledMainContent>
        Unde sed exercitationem distinctio maiores explicabo quas dolores ratione error animi eius a soluta, eaque,
        doloribus odio!
      </StyledMainContent>
      <Button>Click!</Button>
    </>
  );
};

export default MainContent;
