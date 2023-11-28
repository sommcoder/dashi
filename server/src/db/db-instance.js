const postgres = require("postgres");
// require("dotenv").config();

const sql = postgres({
  host: process.env.DEV_DB_HOST,
  port: process.env.DEV_DB_PORT,
  database: process.env.DEV_DB,
  username: process.env.DEV_DB_USERNAME,
  password: process.env.DEV_DB_PASSWORD,
  idle_timeout: 3,
});

module.exports(sql);
