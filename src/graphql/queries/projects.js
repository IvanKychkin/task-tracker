import { gql } from "@apollo/client"

export default gql`
  query {
    projects {
      id
      createdAt
      description
      name
      updatedAt
    }
  }
`;