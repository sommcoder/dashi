const sql = require("./db-instance.js");

/*
- We're going to want a GENERAL database instance to collect data on all accounts
    - Collect product, usage data, etc.. users would be able to 'look up' existing products
    - Account Credit Card 
*/

// ACCOUNT
async function createAccount(name, accountId) {
  /**
   * Add new account via Google Cloud's Postgres
   *
   */
  try {
    // here we're "pipelining" the requests into a single "transaction"
    // a transaction is a set of functions that are triggered by an event
    const newAccountTransaction = await sql.begin((sql) => [
      sql`CREATE DATABASE ${name};`,
      sql`CREATE SCHEMA [IF NOT EXISTS] dashi-account-schema-${accountId};`,
      sql`CREATE TABLE account (
            account_id INT PRIMARY KEY,
            business_name varchar(25) NOT NULL,
            created TIMESTAMP WITHOUT TIME ZONE NOT NULL default now()
          );`,
      sql`CREATE TABLE permission (
            permission_id INT PRIMARY KEY
          );`,
      sql`CREATE TABLE role (
            role_id INT PRIMARY KEY,
            permission INT REFERENCES permission(permission_id)
          );`,
      sql`CREATE TABLE userr (
            user_id INT PRIMARY KEY,
            account INT REFERENCES account(account_id),
            role INT REFERENCES role(role_id),
            username VARCHAR(30) NOT NULL,
            password VARCHAR(30) NOT NULL,
            email VARCHAR(40) NOT NULL,
            phone VARCHAR(10)
          );`,
      sql`CREATE TABLE venue (
            venue_id INT PRIMARY KEY,
            account INT REFERENCES account(account_id)
          );`,
      sql`CREATE TABLE outlet (
                outlet_id INT PRIMARY KEY,
                venue INT REFERENCES account(account_id)
              );`,
      sql`CREATE TABLE venues_outlets (
            venue_id INT REFERENCES venue(venue_id),
            outlet_id INT REFERENCES outlet(outlet_id),
            UNIQUE (venue_id, outlet_id)
          );`,
      sql`CREATE TABLE family (
            family_id INT PRIMARY KEY
          );`,
      sql`CREATE TABLE category (
            category_id INT PRIMARY KEY
          );`,
      sql`CREATE TABLE gl_code (
            gl_code_id INT PRIMARY KEY,
            gl_code_num VARCHAR(10),
            gl_code_name VARCHAR(30)
          );`,
      sql`CREATE TYPE order_format_enum AS ENUM('unit', 'case');`,
      sql`CREATE TABLE dashi_item (
            dashi_item_id INT PRIMARY KEY,
            category_id INT REFERENCES category(category_id),
            family_id INT REFERENCES family(family_id),
            gl_code_id REFERENCES gl_code(gl_code_id),
            unit_cost FLOAT NOT NULL,
            case_size INT NOT NULL,
            uom VARCHAR(15) NOT NULL,
            unit_size FLOAT NOT NULL,
            order_format order_format_enum NOT NULL,
            inventoriable BOOLEAN NOT NULL,
            stock FLOAT,
            last_count FLOAT,
            avg_price FLOAT,
            barcode INT
          );`,
      sql`CREATE TABLE dashi_items_outlets (
            outlet_id INT REFERENCES outlet(outlet_id),
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            UNIQUE (dashi_item_id, outlet_id)
          );`,
      sql`CREATE TABLE vendor (
            vendor_id INT PRIMARY KEY,
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id)
          );`,
      sql`CREATE TABLE vendors_dashi_items (
            vendor_id INT REFERENCES vendor(vendor_id),
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            UNIQUE (vendor_id, dashi_item_id)
          );`,
      sql`CREATE TYPE order_status_enum 
            AS ENUM 
            ('NOT_RECEIVED', 'RECEIVED');
          `,
      sql`CREATE TYPE email_status_enum 
            AS ENUM 
            ('SENT', 'NOT SENT');`,
      sql`CREATE TABLE purchase_order  (
            po_id INT PRIMARY KEY,
            outlet_id INT REFERENCES outlet(outlet_id),
            created_by INT REFERENCES userr(user_id) NOT NULL,
            ordered_status order_status_enum NOT NULL,
            email_status email_status_enum NOT NULL,
            po_total FLOAT NOT NULL, 
            sent_date TIMESTAMP WITHOUT TIME ZONE,
            received_date TIMESTAMP WITHOUT TIME ZONE
          );`,
      sql`CREATE TABLE sale (
            sale_id INT PRIMARY KEY,
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id)
          );`,
      sql`CREATE TABLE inventory (
            inventory_id INT PRIMARY KEY,
          );`,
      sql`CREATE TABLE transfer (
            transfer_id INT PRIMARY KEY,
          );`,
      sql`CREATE TABLE depletion (
            depletion_id INT PRIMARY KEY,
          );`,
      sql`CREATE TYPE custom_field_enum 
            AS ENUM 
            ('DROPDOWN', 'CHECKBOX', 'TEXT', 'NUMBER');
            `,
      sql`CREATE TABLE custom_item_field (
            custom_item_field_id INT PRIMARY KEY,
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql`CREATE TABLE custom_order_field (
            custom_order_field_id INT PRIMARY KEY,
            po_id INT REFERENCES po(po_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql`CREATE TABLE custom_sale_field (
            custom_sale_field_id INT PRIMARY KEY,
            sale_id INT REFERENCES sale(sale_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql`CREATE TABLE custom_inventory_field (
            custom_inventory_field_id INT PRIMARY KEY,
            inventory_id INT REFERENCES inventory(inventory_id),
            depletion_id INT REFERENCES depletion(depletion_id),
            transfer_id INT REFERENCES transfer(transfer_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql`CREATE TABLE invoice (
            custom_field_id INT PRIMARY KEY,
            po_id_id INT REFERENCES purchase_order(dashi_item_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql``,
      sql``,
    ]);
    setTimeout(() => query.cancel(), 5000);
    return newAccountTransaction;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function readAccount(id) {
  try {
    const item = await sql`
        INSERT INTO dashi_item;
        `;
    return item;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function updateAccount(id) {
  try {
    const item = await sql`
        INSERT INTO dashi_item;
        `;
    return item;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function deleteAccount(accountId) {
  try {
    const report = await sql`
          DROP DATABASE ${accountId};
          `;
  } catch (err) {
    console.log("error:", err.message);
  }
  return report;
}

// ITEM
async function createItem(id) {
  try {
    const item = await sql`
        INSERT INTO dashi_item;
        `;
    return item;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function readAllItems(id) {
  try {
    const items = await sql`SELECT * FROM dashi_item;`;
    console.log("items:", items);
    // did we even get this from the DB?
    return items;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function updateItem(id) {
  try {
    const item = await sql`
        INSERT INTO dashi_item;
        `;
    return item;
  } catch (err) {
    console.log("error:", err.message);
  }
}
async function deleteItem(id) {
  try {
    const item = await sql`
        INSERT INTO dashi_item;
        `;
    return item;
  } catch (err) {
    console.log("error:", err.message);
  }
}

module.exports = {
  createAccount,
  readAccount,
  updateAccount,
  deleteAccount,
  createItem,
  readAllItems,
  updateItem,
  deleteItem,
};
