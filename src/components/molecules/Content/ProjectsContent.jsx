import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";

const StyledProjectsContent = styled.main`
  background: #ffedf3;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
  min-height: 80vh;
`;

const ProjectsContent = () => {
  return (
    <StyledProjectsContent>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed exercitationem distinctio maiores explicabo
        quas dolores ratione error animi eius a soluta, eaque, doloribus odio! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Sed sit porro fugiat ipsam, soluta cupiditate, sunt corrupti officiis exercitationem qui
        blanditiis minus quisquam dolor eos commodi dolorum, quas neque nam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Iusto adipisci obcaecati esse. Consectetur tenetur itaque, eum, at deserunt eveniet amet
        laboriosam ipsum delectus repellendus vitae cupiditate. Voluptates, optio dolor!
      </div>
      <Button>Lorem ipsum dolor</Button>
    </StyledProjectsContent>
  );
};

export default ProjectsContent;
