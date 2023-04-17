import { gql } from "@apollo/client";

export default gql`
  query {
    projects {
      tasks {
        createdAt
        deadlineAt
        description
        id
        state
        title
        updatedAt
      }
    }
  }
`;
