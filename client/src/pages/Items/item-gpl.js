import { gql } from "@apollo/client";

// queries

// get a specific item:
export const GET_VENUE_ITEM = gql`
  query getVenueItem($accountId: ID!, $venueId: ID!) {
    account(id: $accountId) {
      venue(id: $venueId) {
        item(id: $accountId) {
         
        }
      }
    }
  }
`;

// mutations
export const POST_VENUE_ITEMS = gql`
  mutation postVenueItems($accountId: ID!, $venueId: ID!) {
    account(id: $accountId) {
      venue(id: $venueId) {
        item
      }
    }
  }
`;
