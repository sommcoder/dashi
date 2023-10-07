import { gql } from "@apollo/client";

/*
All graphql calls will go here and be imported into our component.jsx file
*/

// Queries:
export const GET_DEFAULT_REPORT = gql`
  query getDefaultReport {
    tables {
      id
      type
      data
    }
  }
`;

// Mutations:
export const UPLOAD_FILE = gql`
  mutation UploadFile {
    tables {
      id
      type
      data
    }
  }
`;
