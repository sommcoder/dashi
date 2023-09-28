import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./models/schema.js";
// import * as db from "./models/users.json" assert { type: "json" };
import { resolvers } from "./controllers/resolver.js";

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  // typeDefs -> how to compose a schema
  typeDefs,
  resolvers,
  // resolvers -> functions for how we respond to queries. Ie fetch data from a database!
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});
console.log("url:", url);

console.log("Apollo server is listening with a GraphQL API at port:", PORT);

// Serving a GraphQL server within Express also maintains our ability to use Node.js middleware for common problems like rate-limiting, security, and authentication.

// With GraphQL we have ONE endpoint. Specifications for the query or mutations are handled on the client
