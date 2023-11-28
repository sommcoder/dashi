import postgres from "postgres";
// import * as dotenv from "dotenv";
// dotenv.config();

const sql = postgres({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  database: process.env.DEV_DB,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  idle_timeout: 3,
});

export default sql;
