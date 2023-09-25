import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

// sample JSON data:
// import { users } from "./users.json" assert { type: "json" };
// import { vendors } from "./vendors.json" assert { type: "json" };

/*
 
- Schema goes on the server
- String, Int, FGloat, Boolean, ID, enum, list
- eventually you may want to break up your queries and mutations into separate files
 
*/

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => "world",
      },
    },
  }),
});

export default schema;
