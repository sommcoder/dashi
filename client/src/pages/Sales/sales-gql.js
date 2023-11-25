import { gql } from "@apollo/client";

export const GET_SALES = gql`
  query getSales($reportId: ID!) {
    report(id: $reportId) {
      type
      data
      templates
    }
  }
`;
