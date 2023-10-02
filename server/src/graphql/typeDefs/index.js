// export schemas here so they can be imported into app.js as a single import
import gql from "graphql-tag";
// import { makeExecuReportSchema } from "@graphql-tools/schema";
// other schemas:
// import { typeDefs as settings } from "./settings.js";
// import { typeDefs as Reports } from "./Reports.js";

export const typeDefs = gql`
  ################# ROOT ###################
  # essentially we GET data for components
  # pages are all sent to the client and then JS handles what gets rendered
  # Does Report need to persist?
  # or is Report just a component, a shell to be filled with data
  type Query {
    account: Account
    venue: Venue
    venues: [Venue]
    area: Area
    areas: [Area]
    user: User
    users: [User]
    dashiItem: DashiItem
    dashiItems: [DashiItem]
  }
  type Mutation {
    account: Account
    venue: Venue
    venues: [Venue]
    area: Area
    areas: [Area]
    user: User
    users: [User]
    dashiItem: DashiItem
    dashiItems: [DashiItem]
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
    users: [User!]!
    families: [Family!]!
    categories: [Category!]!
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
  #### Dashboard / Report
  type Dashboard {
    id: ID!
    Reports: [Report!]!
  }
  type ReportType {
    id: ID!
    name: [String!]!
  }
  type Report {
    id: ID!
    name: String!
    # view(name: View = DefaultReport): String!
    type: ReportType!
  }
  enum ReportType {
    DISPLAY
    SETUP
  }
  type DefaultReport {
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
  ###### Item
  type Family {
    id: ID!
    name: String!
    categories: [Category!]!
  }
  type Category {
    id: ID!
    name: String!
  }
  type DashiItem {
    id: ID!
    title: String!
    family: Family!
    category: Category!
    cost: Int!
    costUnitOfMeasurement: String!
    measurement: Float!
    unitOfMeasurement: String!
    caseSize: Int!
    areas: [Area!]!
    excludeFromVariance: Boolean!
    inventoriable: Boolean!
    inventoriableAsCase: Boolean!
    barcodes: [Int!]!
    customFields: [customField!]!
  }
  type customField {
    id: ID!
    type: FieldType
  }

  enum FieldType {
    DROPDOWN
    CHECKBOX
    SHORT_TEXT
    LONG_TEXT
  }
`;

// export const typeDefs = makeExecuReportSchema({
//   typeDefs: [root, settings, Reports],
// });
