import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { router as tableRoutes } from "./routes/table-routes.js";

/*
 
postgresql://postgres:[YOUR-PASSWORD]@db.ojzvtcddcayocgplssyn.supabase.co:5432/postgres
 
*/

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
  console.log(`server is running on http://localhost:${PORT}`)
);
