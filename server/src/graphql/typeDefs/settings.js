import gql from "graphql-tag";
/*

Every GraphQL query goes through THREE phases: parse, Validate, Execute

- resolvers are going to emit JSON.

- Schema goes on the server
- String, Int, FGloat, Boolean, ID, enum, list
- eventually you may want to break up your queries and mutations into separate files

 type Query is the ROOT query type
 type Mutation is the ROOT mutation type

 These are the "top-level" fields that our client can query for

*/
export const typeDefs = gql`
  type Account {
    id: ID!
    name: String!
    venues: [Venue!]!
  }
  type Venue {
    id: ID!
    name: String!
    areas: [Area!]!
  }
  type Area {
    id: ID!
    name: String!
    venue: Venue!
  }
  type User {
    id: ID!
    roles: [String!]!
    firstName: String!
    lastName: String!
    name: String!
    username: String!
    email: String!
    dateCreated: String!
  }
  type OperationPeriod {
    id: ID!
  }
  type OperationWeek {
    id: ID!
    days: [OperationDay!]!
  }
  type OperationDay {
    id: ID!
    dayOfMonth: Int!
    dayOfWeek: Int!
    week: OperationWeek!
    period: OperationPeriod!
  }
  type Dashboard {
    id: ID!
    table: [Table]
  }
`;
