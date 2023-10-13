import { gql } from "@apollo/client";

/*
- Accounts contain Venues
- Venues house our Reports
- Reports represent our table(s) of data
- THERE IS NO REPORTS TABLE! Reports are how we refer to the various different Report Tables such as Sales, Labour, Items
- Views are part of a Report and are the saved settings on how we'd like to view a Report.
- Templates are saved File Structures
 
*/

// Queries /////////////////////////
// Reports are what we submit files to
// The columns in the files should MATCH the columns
// Report Ids are dictated by the submenu/page they are on
export const GET_REPORT = gql`
  query getReport($reportId: ID!) {
    report(id: $reportId) {
      type
      data
      templates
    }
  }
`;

// Mutations:
// adds a file to an existing REPORT
export const POST_FILE = gql`
  mutation postFile($reportId: ID!) {
    report(id: $reportId) {
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
