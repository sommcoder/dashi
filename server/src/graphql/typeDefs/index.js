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
    getTemplate: Template
  }
  type Mutation {
    createAccount: Account
    deleteAccount: Account
    venue: Venue
    venues: [Venue]
    area: Area
    areas: [Area]
    user: User
    users: [User]
    dashiItem: DashiItem
    dashiItems: [DashiItem]
    addTable: Venue # enter through Venue
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

  type Template {
    
  }
  type Area {
    id: ID!
    name: String!
    venue: Venue!
  }
  type User {
    id: ID!
    role: Role! # 1:1
    firstName: String!
    lastName: String!
    name: String!
    username: String!
    email: String!
    dateCreated: String!
  }
  type Role {
    id: ID!
    name: String!
    permission: Permissions! #1
  }

  type Permissions {
    id: ID!
    userPermission: UserPermissions!
    venuePermission: VenuePermissions!
    itemPermission: ItemPermissions!
    orderPermission: OrderPermissions!
    inventoryPermission: InventoryPermissions!
  }

  type VenuePermissions {
    id: ID!
    viewVenueSettings: Boolean!
    updateVenueSettings: Boolean!
  }

  type ItemPermissions {
    id: ID!
    viewItems: Boolean!
    addItems: Boolean!
    mergeItems: Boolean!
    archiveItems: Boolean!
  }

  type OrderPermissions {
    id: ID!
    receiving: Boolean!
    addOrdering: Boolean!
    addInvoicing: Boolean!
    archiveOrdering: Boolean!
    archiveInvoicing: Boolean!
  }

  type UserPermissions {
    id: ID!
    inviteUsers: Boolean!
    changeUsersRole: Boolean!
    archiveUsers: Boolean!
  }

  type InventoryPermissions {
    id: ID!
    viewInventory: Boolean!
    startInventory: Boolean!
    editInventory: Boolean!
    approveInventory: Boolean!
    archiveInventory: Boolean!
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
    id: ID
    name: [String!]!
  }
  type Report {
    # there is NO table, Reports save the data, Tables are just a React component, a vessel to house the data from the report
    id: ID!
    name: String!
    type: ReportType!
    categories: [Category!]!
    families: [Family!]!
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
    defaultDeposit: Float!
    defaultGLCode: Int! # not required
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
    TEXT
    NUMBER
  }

  type Vendor {
    id: ID!
  }

  type Report {
    id: ID!
  }

  ### Ordering / Invoices
  type PurchaseOrder {
    id: ID! # is the PO number as well
    vendor: Vendor! # 1:1
    area: Area! # 1:1
    created: String!
    ordered: String! # sent to vendor
    orderStatus: OrderStatus!
    emailStatus: EmailStatus!
    createdBy: User!
  }
  enum OrderStatus {
    NOT_RECEIVED
    RECEIVED
  }
  enum EmailStatus {
    SENT
    NOT_SENT
  }
`;

// export const typeDefs = makeExecuReportSchema({
//   typeDefs: [root, settings, Reports],
// });
