// import { gql } from "@apollo/client";

/*
 
- Dashboard page showcases the users preferred tables in a more convenient, customizable view.
- Tables can be minimized/maximized, and moved around within a grid system 
- Files can also be directly added to existing tables from here

*/

// // The initial load that gets all of the venue's data
// // This data is the cached on Apollo Client
// // Init gets called in the RouteWrapper page
// export const GET_VENUE_DATA = gql`
//   query getVenueData($accountId: ID!, $venueId: ID!) {
//     account(id: $accountId) {
//       venue(id: $venueId)
//     }
//   }
// `;

// // get report/view data for ALL
// // report/view state is saved to the DB so it persists across sessions and clients
// export const GET_REPORT_STATE = gql`
//   query getVenueData($accountId: ID!, $venueId: ID!) {
//     account(id: $accountId) {
//       venue(id: $venueId)
//     }
//   }
// `;

// Need to get Items, it's the basis for 75% of the application
// export const GET_ITEMS = gql`
//   query getVenueData($accountId: ID!, $venueId: ID!) {
//     account(id: $accountId) {
//       venue(id: $venueId)
//     }
//   }
// `;
