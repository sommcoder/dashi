import postgres from "postgres";
import * as dotenv from "dotenv";
dotenv.config();

// services include all the business logic
// It can ave services that represent business object and can run queries on the database

const sql = postgres({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  database: process.env.DEV_DB,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
});

export default sql;
