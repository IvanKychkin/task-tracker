import React from "react";
import Modal from "react-modal";
import styled, { withTheme } from "styled-components";

import Button from "src/components/atoms/Button/Button";
import { CloseButton, modalStyles } from "./styled";

const ButtonDiv = styled.div`
  margin-top: 3vh;
`;

const ModalWindow = ({ isOpen = true, setIsOpen = () => {}, children }) => {
  return (
    <Modal
      style={{
        content: { ...modalStyles.content },
        overlay: { ...modalStyles.overlay },
      }}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => setIsOpen(false)}
    >
      <CloseButton onClick={() => setIsOpen(false)} />
      {children}
      <ButtonDiv>
        <Button>Yes</Button>
        <Button onClick={() => setIsOpen(false)}>No</Button>
      </ButtonDiv>
    </Modal>
  );
};

Modal.setAppElement("body");

export default withTheme(ModalWindow);
