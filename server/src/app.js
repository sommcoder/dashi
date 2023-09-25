import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { router as tableRoutes } from "./routes/table-routes.js";

const PORT = process.env.PORT || 3000;

const app = express();

// handle 'tables' routes:
app.use("/tables", cors(), tableRoutes);

// handle root:
app.get("/", cors(), (_, res) => {
  console.log("we're connected!"); // prints on server console
  res.send("we're connected"); // sends to client
});

app.listen(PORT, () =>
  console.log(`dashi's server is running on http://localhost:${PORT}`)
);

/*
 
Simple REST API structure:

1) Routes take in the initial request
    - Express Route layer
2) Routes pass requests to Controllers
    - 
3) Controller passes to the Service Layer
    - This is out BUSINESS LOGIC
4) Service Layer then "speaks" with our Data
    - Where we work with our data stores
 

BEST PRACTICES:
` API versioning:
    create different paths: /api/v1/tables and /api/v2/tables


*/
