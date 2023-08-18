import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

// import mongoose from "mongoose";

import { router as tableRoutes } from "./routes/table-routes.js";

// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);
// const clusterName = encodeURIComponent(process.env.CLUSTER);
// const URI = `mongodb+srv://${username}:${password}@${clusterName}.mluyyks.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;

const app = express();

// handle 'tables' routes:
app.use("/tables", cors(), tableRoutes);

// handle root:
app.get("/", cors(), (_, res) => {
  console.log("we're connected!"); // prints on server console
  res.send("we're connected"); // sends to client
});

// mongoose
//   .connect(URI)
//   .then(() => {
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
// })
// .catch((err) => console.log(err));
