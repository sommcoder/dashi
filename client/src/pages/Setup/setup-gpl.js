import { gql } from "@apollo/client";

// queries

// get a specific item:
// export const ___ = gql`
//   query getVenueItem($accountId: ID!, $venueId: ID!) {
//     account(id: $accountId) {

//     }
//   }
// `;

// mutations
// after client-side validation in the table component
// push file up to the Page
// page dictates what to do with the file
// in this instance file is to be sent to GCP's Document AI
export const POST_TEMPLATE = gql`
  query getVenueItem($accountId: ID!, $venueId: ID!) {
    account(id: $accountId) {

    }
  }
`;
