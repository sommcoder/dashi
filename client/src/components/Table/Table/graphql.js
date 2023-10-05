import { gql } from '@apollo/client';

/*
 
All graphql calls will go here and be imported into our component.jsx file
 
*/
export const GET_ALL_TABLES = gql`
  query GetAllTables {
    tables {
      id
      type
      data
    }
  }
`;
