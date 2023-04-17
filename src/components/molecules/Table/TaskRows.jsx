import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import Button from "../../atoms/Button/Button";
import { useTasks } from "../../../hooks/states/task";

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

const TaskRows = () => {
  const { tasks } = useTasks();
  console.log(tasks);

  return (
    <>
      {tasks.map(({ state, title, description, deadlineAt, createdAt, updatedAt }) => (
        <StyledTr key={`table-row-${v4()}`}>
          <StyledTd> {title} </StyledTd>
          <StyledTd> {description} </StyledTd>
          <StyledTd>
            {deadlineAt
              .replace("T", " ")
              .replace("Z", " ")
              .substring(0, deadlineAt.length - 4)}
          </StyledTd>
          <StyledTd>
            {createdAt
              .replace("T", " ")
              .replace("Z", " ")
              .substring(0, createdAt.length - 4)}
          </StyledTd>
          <StyledTd>
            {updatedAt
              .replace("T", " ")
              .replace("Z", " ")
              .substring(0, updatedAt.length - 4)}
          </StyledTd>
          <StyledTd> {state} </StyledTd>
          <StyledTd>
            <Button color="#fae7b5">Edit</Button>
          </StyledTd>
          <StyledTd>
            <Button color="#ff9baa">Delete</Button>
          </StyledTd>
        </StyledTr>
      ))}
    </>
  );
};

export default TaskRows;
