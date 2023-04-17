import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

import Button from "../../atoms/Button/Button";
import { useProjects } from "../../../hooks/states/project";
import ModalWindow from "../../atoms/ModalWindow/ModalWindow";

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

const ProjectRows = () => {
  const { projects } = useProjects();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      {projects.map(({ id, description, name, createdAt, updatedAt }) => (
        <StyledTr key={`table-row-${v4()}`}>
          <StyledTd> {name} </StyledTd>
          <StyledTd> {description} </StyledTd>
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
          <StyledTd>
            <Link to={`/projects/${id}`}>
              <Button color="#ccccff">Tasks</Button>
            </Link>
          </StyledTd>
          <StyledTd>
            <Button color="#fae7b5">Edit</Button>
          </StyledTd>
          <StyledTd>
            <Button color="#ff9baa" onClick={() => setIsDeleteModalOpen(true)}>
              Delete
            </Button>
          </StyledTd>
        </StyledTr>
      ))}
      {isDeleteModalOpen && (
        <ModalWindow isOpen={isDeleteModalOpen} projectName="Testname" setIsOpen={setIsDeleteModalOpen}>
          Do you sure want to delete this Project?
        </ModalWindow>
      )}
    </>
  );
};

export default ProjectRows;
