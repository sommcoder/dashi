import gql from "graphql-tag";

/* 
1) GraphQL types are nullable by default
2) GraphQL is versionless, no breaking changes
3) 
*/

export const typeDefs = gql`
  ################# ROOTS ###################
  type Query {
    account: Account
    venue: Venue
    venues: [Venue]
    outlet: Outlet
    outlets: [Outlet]
    user: User
    users: [User]
    dashiItem: DashiItem
    dashiItems: [DashiItem]
    getReport: Template
    getDashboard: [Report] #dashboard contains the reports the user wants on their homepage
  }
  type Mutation {
    createAccount: Account
    deleteAccount: Account
    venue: Venue
    venues: [Venue]
    outlet: Outlet
    outlets: [Outlet]
    user: User
    users: [User]
    createItem: DashiItem
    dashiItem: DashiItem
    dashiItems: [DashiItem]
    postFile: File
    addTable: Venue # enter through Venue
  }
  ###########################################
  ######## Account Settings
  type Account {
    id: ID!
    name: String!
    venues: [Venue!]!
  }
  type Venue {
    id: ID!
    name: String!
    outlets: [Outlet!]!
    users: [User!]!
    families: [Family!]!
    categories: [Category!]!
  }
  type ReportType {
    id: ID
    name: [String!]!
  }
  type Report {
    # There is NO "table", table is a component
    # Report table stores the data
    # Reports have templates associated with them that also get fetched
    id: ID!
    name: String!
    type: ReportType!
    categories: [Category!]!
    families: [Family!]!
    templates: [Template!]!
  }
  enum ReportType {
    DISPLAY
    SETUP
  }

  type Template {
    id: ID!
    name: String!
  }

  # a file is a single or multiple row/tuple to be added to a Report Table in our DB
  type File {
    id: ID!
    columns: [String!]!
    rows: [Row!]!
  }

  type Row {
    id: ID!
    # value: []
  }

  type Outlet {
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
    permission: Permissions!
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
    outlets: [Outlet!]!
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
    outlet: Outlet! # 1:1
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
