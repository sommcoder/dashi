import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./models/schema.js";

const port = process.env.PORT || 3000;

// Serving a GraphQL server within Express also maintains our ability to use Node.js middleware for common problems like rate-limiting, security, and authentication.

// With GraphQL we have ONE endpoint. Specifications for the query or mutations are handled on the client
const app = express();
app.all("/graphql", createHandler({ schema }));

app.listen(port, () =>
  console.log(`Dashi's GraphQL API is listening on http://localhost:${port}`)
);
