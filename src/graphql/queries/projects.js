import { gql } from "@apollo/client";

export default gql`
  query {
    projects {
      createdAt
      description
      id
      name
      updatedAt
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
