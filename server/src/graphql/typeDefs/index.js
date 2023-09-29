// export schemas here so they can be imported into app.js as a single import
import gql from "graphql-tag";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// other schemas:
// import { typeDefs as settings } from "./settings.js";
// import { typeDefs as tables } from "./tables.js";

export const typeDefs = gql`
  ###### ROOT
  type Query {
    account: [Account]
    venue: [Venue]
    area: [Area]
    user: [User]
    item: [Item]
  }
  type Mutation {
    account: [Account]
    venue: [Venue]
    area: [Area]
    user: [User]
    item: [Item]
  }
  ######## Account Settings
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
  ###### Venue Settings:
  type OperationYear {
    id: ID!
    weeks: [OperationPeriod!]!
  }
  type OperationPeriod {
    id: ID!
    weeks: [OperationWeek!]!
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
  type Family {
    id: ID!
    name: String!
    categories: [Category!]!
  }
  type Category {
    id: ID!
    name: String!
  }
  type Dashboard {
    id: ID!
    table: [Table!]!
  }
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

// export const typeDefs = makeExecutableSchema({
//   typeDefs: [root, settings, tables],
// });
