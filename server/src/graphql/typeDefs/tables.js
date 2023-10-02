import gql from "graphql-tag";

export const typeDefs = gql`
  type TableType {
    id: ID!
    name: [String!]!
  }
  type Table {
    id: ID!
    name: String!
    # view(name: View = DefaultTable): String!
    type: String!
  }
  type DefaultTable {
    id: ID!
  }
  type Columns {
    id: ID!
  }
  type Filters {
    id: ID!
  }
  type View {
    id: ID!
    columns: Columns!
    filters: Filters!
  }
  type Item {
    id: ID!
    title: String!
    family: Family!
    category: Category!
    cost: Int!
  }
`;
