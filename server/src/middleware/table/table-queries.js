import sql from "../../db/db-instance.js";

// MUTATIONS:
// TABLE
export async function getTable(tableName) {
  const table = await sql`DROP ${tableName} FROM table`;
  return table; // should just return a message
}
