import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const StyledTr = styled.tr`
  background-color: #ffb2cd;
  width: 100%;
  height: 20px;
  padding-top: 2px;
  text-align: center;
  margin-top: auto;
`;

const StyledTd = styled.td`
  font-weight: 600;
  background: #ebdae0;
  border-block: 1px solid #808080;
  writing-mode: horizontal-tb;
`;

const TaskRow = () => {
  return (
    <StyledTr>
      <StyledTd>Homework 27.03</StyledTd>
      <StyledTd>no description about this</StyledTd>
      <StyledTd>20.03.2023</StyledTd>
      <StyledTd>27.03.2023</StyledTd>
      <StyledTd>
        <Button color="#fae7b5">Edit</Button>
      </StyledTd>
      <StyledTd>
        <Button color="#ff9baa">Destroy</Button>
      </StyledTd>
    </StyledTr>
  );
};

export default TaskRow;
