import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledScrollToTopButton = styled.button`
  position: fixed;
  top: 6vh;
  right: 3.5vh;
  padding: 0.8vh 3vh 0.8vh;
  background-color: #ffb2cd;
  color: white;
  border-radius: 4px;
  border: 1.2px solid #696969;
  box-shadow: rgba(100, 100, 111, 0.4) 0px 5px 20px 0px;
`;

const ScrollToTopButton = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return showScrollBtn && <StyledScrollToTopButton onClick={onClick}>Scroll to top</StyledScrollToTopButton>;
};

export default ScrollToTopButton;
