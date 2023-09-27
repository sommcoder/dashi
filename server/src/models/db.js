import postgres from "postgres";

const sql = postgres({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  database: process.env.DEV_DB,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
}); // will use psql environment variables

// our postgreSQL database client instance
export default sql;
