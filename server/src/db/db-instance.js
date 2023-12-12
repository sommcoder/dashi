require("dotenv").config();
const postgres = require("postgres");

const USER = process.env.DEV_DB_USERNAME;
const HOST = process.env.DEV_DB_HOST;
const DB = process.env.DEV_DB_NAME;
const PASS = process.env.DEV_DB_PASSWORD;
const DB_PORT = process.env.DEV_DB_PORT;

module.exports = postgres({
  host: HOST,
  port: DB_PORT,
  database: DB,
  username: USER,
  password: PASS,
});
