import React from "react";
import styled from "styled-components";
import TableRow from "../TableRow/TableRow";

const StyledProjectsContent = styled.main`
  background: #ffedf3;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 1.5rem 1rem;
  max-width: 100%;
  overflow: scroll;
`;

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #808080;
`;

const StyledHead = styled.thead`
  background: #ffb2cd;
`;

const StyledTh = styled.th`
  font-weight: 900;
  padding: 0.5rem 1rem;
`;

const ProjectsContent = () => {
  return (
    <StyledProjectsContent>
      <StyledTable>
        <StyledHead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Description</StyledTh>
            <StyledTh>Created at</StyledTh>
            <StyledTh> </StyledTh>
            <StyledTh> </StyledTh>
            <StyledTh> </StyledTh>
          </tr>
        </StyledHead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </StyledTable>
    </StyledProjectsContent>
  );
};

export default ProjectsContent;
