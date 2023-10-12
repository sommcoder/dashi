import { gql } from "@apollo/client";

/*
All graphql calls will go here and be imported into our component.jsx file
*/

// Queries /////////////////////////
// Reports are what we submit files to
// The columns in the files should MATCH the columns
export const GET_REPORT = gql`
  query getREPORT {
    REPORT {
      id
      type
      data
    }
  }
`;

// Mutations:
// adds a file to an existing REPORT
export const POST_FILE = gql`
  mutation postFile {
    file {
      id
      report
      type
      data
    }
  }
`;

// REPORTs are where data
export const POST_REPORT = gql`
  mutation postREPORT {
    report {
      id
      type
      data
      templates
    }
  }
`;

export const PATCH_REPORT = gql`
  mutation patchREPORT {
    report {
      id
      type
      data
      templates
    }
  }
`;

// Templates are the saved setups we want to persist for a particular Report.
// This is a N:1 relationship to Reports.
// There are many reports on a Venue.
// There is also potentially many Venues to an Account.
// They are saved on the DB, however used for client side render on the Table in React

// Templates are the "VIEW"
export const PATCH_TEMPLATE = gql`
  mutation patchTemplate {
    template {
      id
      type
      data
    }
  }
`;

export const POST_TEMPLATE = gql`
  mutation postTemplate {
    template {
      id
      type
      data
    }
  }
`;

/*
 
1) 
 
*/
