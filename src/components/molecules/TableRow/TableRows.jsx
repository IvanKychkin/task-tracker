import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

import Button from "../../atoms/Button/Button";
import { useProjects } from "../../../hooks/states/project";

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

const TableRows = () => {
  const { projects } = useProjects();
  console.log(projects);

  return (
    <>
      {projects.map(({ id, description, name, createdAt, updatedAt }) => (
        <StyledTr key={`table-row-${v4()}`}>
          <StyledTd> {name} </StyledTd>
          <StyledTd> {description} </StyledTd>
          <StyledTd> {createdAt} </StyledTd>
          <StyledTd> {updatedAt} </StyledTd>
          <StyledTd>
            <Button color="#ccccff">Tasks</Button>
          </StyledTd>
          <StyledTd>
            <Button color="#fae7b5">Edit</Button>
          </StyledTd>
          <StyledTd>
            <Button color="#ff9baa">Destroy</Button>
          </StyledTd>
        </StyledTr>
      ))}
    </>
  );
};

export default TableRows;
