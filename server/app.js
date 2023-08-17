import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

// import mongoose from "mongoose";

import { router as tableRoutes } from "./routes/table-routes.js";

dotenv.config();
// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);
// const clusterName = encodeURIComponent(process.env.CLUSTER);
// const URI = `mongodb+srv://${username}:${password}@${clusterName}.mluyyks.mongodb.net/?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3000;
const app = express();

// MOunts the specified middleware FUNCTION(s) at the specified PATH
app.use(cors("/tables", tableRoutes));

// mongoose
//   .connect(URI)
//   .then(() => {
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
// })
// .catch((err) => console.log(err));
