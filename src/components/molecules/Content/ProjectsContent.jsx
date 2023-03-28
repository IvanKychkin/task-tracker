import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const StyledProjectsContent = styled.main`
  background: #ffedf3;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`; // 22px(header); 15px+1rem(footer) min-height: calc(100vh - 22px - 15px - 1rem);

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid #808080;
`;

const StyledHead = styled.thead`
  background: #ffb2cd;
`;

const StyledTd = styled.td`
  font-weight: 600;
  background: #ebdae0;
  border-block: 1px solid #808080;
  writing-mode: horizontal-tb;
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
          <tr>
            <StyledTd>Project 1</StyledTd>
            <StyledTd>no description about description description</StyledTd>
            <StyledTd>20.03.2023</StyledTd>
            <StyledTd>
              <Button color="#ccccff">Tasks</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#fae7b5">Edit</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#ff9baa">Destroy</Button>
            </StyledTd>
          </tr>
          <tr>
            <StyledTd>Project 2</StyledTd>
            <StyledTd>no description here right now</StyledTd>
            <StyledTd>10.01.2023</StyledTd>
            <StyledTd>
              <Button color="#ccccff">Tasks</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#fae7b5">Edit</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#ff9baa">Destroy</Button>
            </StyledTd>
          </tr>
          <tr>
            <StyledTd>Project 3</StyledTd>
            <StyledTd>no description about this project</StyledTd>
            <StyledTd>02.06.2023</StyledTd>
            <StyledTd>
              <Button color="#ccccff">Tasks</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#fae7b5">Edit</Button>
            </StyledTd>
            <StyledTd>
              <Button color="#ff9baa">Destroy</Button>
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </StyledProjectsContent>
  );
};

export default ProjectsContent;

/*
table.purpleHorizon {
  background-color: #FFEDF3;
  width: 100%;
  text-align: center;
}
table.purpleHorizon StyledTd, table.purpleHorizon StyledTh {
  border: 1px solid #333333;
  padding: 4px 4px;
}
table.purpleHorizon tbody StyledTd {
  font-size: 13px;
  font-weight: bold;
  color: #333333;
}
table.purpleHorizon tr:nth-child(even) {
  background: #FEC8D6;
}
table.purpleHorizon thead {
  background: #FE74A4;
}
table.purpleHorizon thead StyledTh {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
}
table.purpleHorizon tfoot StyledTd {
  font-size: 14px;
}
table.purpleHorizon tfoot .links {
  text-align: right;
}
table.purpleHorizon tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
*/
