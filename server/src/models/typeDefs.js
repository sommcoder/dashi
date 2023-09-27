/*

Every GraphQL query goes through THREE phases: parse, Validate, Execute

- resolvers are going to emit JSON.


- Schema goes on the server
- String, Int, FGloat, Boolean, ID, enum, list
- eventually you may want to break up your queries and mutations into separate files

 type Query is the ROOT query type
 type Mutation is the ROOT mutation type

*/
export const typeDefs = `#graphql
type Query {
    account: [Account],
    venue: [Venue],
    area: [Area],
    user: [User],
    item: [Item]
}
type Account {
    id: ID!,
    name: String!,
    venues: [Venue!]!,
}
type Venue {
    id: ID!,
    name: String!,
    areas: [Area!]!
}
type Area {
    id: ID!,
    name: String!,
    venue: Venue!
}
type User {
    id: ID!,
    roles: [String!]!,
    firstName: String!,
    lastName: String!,
    name: String!,
    username: String!,
    email: String!,
    dateCreated: String!
}
type Item {
    id: ID!,
    title: String!,
    family: Family!,
    category: Category!,
    cost: Int!,
    
}
type Family {
  id: ID!,
}
type Category {
  id: ID!,
}
type OperationPeriod {
  id: ID!,
}
type OperationWeek {
  id: ID!,
  days: [OperationDay!]!,

}
type OperationDay {
    id: ID!,
    dayOfMonth: Int!,
    dayOfWeek: Int!,
    week: OperationWeek!,
    period: OperationPeriod!,
}

`;
