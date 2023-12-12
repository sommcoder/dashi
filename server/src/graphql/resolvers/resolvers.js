import { ApolloServerErrorCode } from "@apollo/server/errors";
import * as db from "./pg.js";

export const resolvers = {
  Query: {
    account() {
      try {
        return db.account;
      } catch (err) {
        console.log(
          "error:",
          err.message,
          "apollo err:",
          ApolloServerErrorCode.GRAPHQL_PARSE_FAILED
        );
      }
    },
  },
  Mutations: {
    createItem(name) {
      try {
        // const id = mw.createId();
        return db.createItem(name);
      } catch (err) {
        console.log("error:", err.message);
      }
    },
    // readItem(name) {
    //   // const id = mw.readId();
    //   return db.readItem(name);
    // },
    // updateItem(name) {
    //   // const id = mw.updateId();
    //   return db.updateItem(name);
    // },
    // deleteItem(name) {
    //   // const id = mw.deleteId();
    //   return db.deleteItem(name);
    // },
    createAccount(name) {
      // const id = mw.createId();
      return db.createAccount(name);
    },
  },
  //   readAccount(id) {
  //     return db.dropAccount(id);
  //   },
  // },
  //   updateAccount(id) {
  //     return db.dropAccount(id);
  //   },
  // },
  //   deleteAccount(id) {
  //     return db.dropAccount(id);
  //   },
  // },
};

// Resolvers are responsible for LINKING the schema field to the data source.

// graphql requests are parsed and validated against the schema
// graphql receives the request to determine WHAT the request even says because it's just a STRING essentially that requires a schema to be parsed and validated against.

// middleware modifies the request and response objects, terminate the execution and pass execution to the NEXT middleware function in the stack.

// then resolver functions are triggered which is like a controller
// middleware is where we keep our postgres client functionality and where we are going to FETCH our data from our database
// middleware functions split logic into chunks that handle SINGLE task and can be reused in the same project for different requests.

/*

- Authorization
- Extraction and storage of metrics
- Caching
- Debugging
- Fallback operations
- Input Validation
- Logging
- Output Manipulation

*/

// in GraphQL there is only TWO requests. Query and Mutation.
// Several graphQL servers have incorporated the concept of middleware to bne applied at the FIELD resolver level.

// the JSON that GraphQL converts the request to will then be used to interact with the DB

/*

- with @directives, they provide a ONE-WAY execution flow
- GraphQL provides some built-in @directives
-

*/

/*

 Except they resolve all the way down. What does that mean? Well therefore, resolvers resolving a type, and a type has a field that's referring to another type, and then that type has a field that's referring to another type.

You have to have a resolver for every single type all the way down, so it resolves all the way down depending on the query that came in. So if the query asks for those connections, I want this type that refers to this type, that refers to this type, then you have to have resolvers for every single level.

*/

/*

1) Every query and mutations your schema has MUST have a resolver that returns the specified type.

2)

*/
