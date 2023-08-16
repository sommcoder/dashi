import * as dotenv from "dotenv";
import express from "express";
// import mongoose from "mongoose";

import { router as tableRoutes } from "./routes/table-routes.js";

dotenv.config();
// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);
// const clusterName = encodeURIComponent(process.env.CLUSTER);
// const URI = `mongodb+srv://${username}:${password}@${clusterName}.mluyyks.mongodb.net/?retryWrites=true&w=majority`;

const port = process.env.PORT || 3000;
const app = express();

app.use("/api/tables", tableRoutes);

// mongoose
//   .connect(URI)
//   .then(() => {
app.listen(port, () => console.log(`server is running on port ${port}`));
// })
// .catch((err) => console.log(err));
