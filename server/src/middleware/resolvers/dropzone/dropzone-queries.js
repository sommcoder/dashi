import sql from "../../../db/db-instance.js";

export async function getDropzone(tableName) {
  const table = await sql`SELECT ${tableName} FROM table`;
  return table;
}
