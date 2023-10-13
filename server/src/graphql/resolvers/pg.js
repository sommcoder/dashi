import sql from "../../db/db-instance.js";

// QUERIES:
export async function getReport(id) {
  // server selects new
  if (id) {
    const report = await sql`
      SELECT * FROM report
      WHERE id = ${id};
      `;
  } else {
    const report = await sql`
      SELECT * FROM report
      WHERE id = 0;
      `;
  }
  return report;
}
export async function getReports() {
  // user wants to view all of their reports in the Venue menu OR as a shortcut on a particular submenu page for editing purposes.
  try {
    const report = await sql`
        SELECT * FROM report;
        `;
    return report;
  } catch (err) {
    console.log("error:", err.message);
  }
}

/*
 
- We're going to want a GENERAL database instance to collect data on accounts

- Collect product, usage data
- Account Credit Card 
 
*/

// MUTATIONS:
export async function createAccount(name, id) {
  /**
   * Add new account via Google Cloud
   *
   */
  try {
    // here we're "pipelining" the requests into a single "transaction"
    // a transaction is a set of functions that are triggered by an event
    const newAccountTransaction = await sql.begin((sql) => [
      sql`CREATE DATABASE ${name};`,
      sql`CREATE SCHEMA [IF NOT EXISTS] dashi-user-schema-${id};`,
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
      sql`CREATE TABLE area (
                area_id INT PRIMARY KEY,
                venue INT REFERENCES account(account_id)
              );`,
      sql`CREATE TABLE venues_areas (
            venue_id INT REFERENCES venue(venue_id),
            area_id INT REFERENCES area(area_id),
            UNIQUE (venue_id, area_id)
          );`,
      sql`CREATE TABLE family (
            family_id INT PRIMARY KEY
          );`,
      sql`CREATE TABLE category (
            category_id INT PRIMARY KEY
          );`,
      sql`CREATE TYPE order_format_enum AS ENUM('unit', 'case');`,
      sql`CREATE TABLE dashi_item (
            dashi_item_id INT PRIMARY KEY,
            category_id INT REFERENCES category(category_id),
            family_id INT REFERENCES family(family_id),
            unit_cost FLOAT NOT NULL,
            case_size INT NOT NULL,
            unit_of_measurement VARCHAR(15) NOT NULL,
            item_measurement FLOAT NOT NULL,
            order_format order_format_enum NOT NULL,
            inventoriable BOOLEAN NOT NULL,
            inventoriable_as_case BOOLEAN NOT NULL,
            gl_account VARCHAR(10),
            stock FLOAT,
            last_count FLOAT,
            avg_price FLOAT,
            barcode INT
          );`,
      sql`CREATE TABLE dashi_items_areas (
            area_id INT REFERENCES area(area_id),
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            UNIQUE (dashi_item_id, area_id)
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
      sql`CREATE TABLE purchase_orders  (
            po_id INT PRIMARY KEY,
            area_id INT REFERENCES area(area_id),
            created_by INT REFERENCES userr(user_id) NOT NULL,
            ordered_status order_status_enum NOT NULL,
            email_status email_status_enum NOT NULL,
            po_total FLOAT NOT NULL, 
            sent_date TIMESTAMP WITHOUT TIME ZONE,
            received_date TIMESTAMP WITHOUT TIME ZONE
          );`,
      sql`CREATE TYPE custom_field_enum 
            AS ENUM 
            ('DROPDOWN', 'CHECKBOX', 'TEXT', 'NUMBER');
            `,
      sql`CREATE TABLE custom_item_fields (
            custom_field_id INT PRIMARY KEY,
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql`CREATE TABLE custom_po_fields (
            custom_field_id INT PRIMARY KEY,
            dashi_item_id INT REFERENCES dashi_item(dashi_item_id),
            field_name VARCHAR(25) NOT NULL,
            field_type custom_field_enum NOT NULL
          );`,
      sql``,
      sql``,
      sql``,
    ]);
    setTimeout(() => query.cancel(), 5000);
    return newAccountTransaction;
  } catch (err) {
    console.log("error:", err.message);
  }
}

export async function createReport(name, id) {
  try {
    const newReport = await sql.begin((sql) => [
      sql``,
      sql``,
      sql``,
      sql``,
      sql``,
      sql``,
    ]);
    setTimeout(() => query.cancel(), 5000);
    return newReport;
  } catch (err) {
    console.log("error:", err.message);
  }
}

export async function updateReport(name, id) {
  try {
    const newTable = await sql.begin((sql) => [
      sql``,
      sql``,
      sql``,
      sql``,
      sql``,
      sql``,
    ]);
    setTimeout(() => query.cancel(), 5000);
    return newTable;
  } catch (err) {
    console.log("error:", err.message);
  }
}

/*
             

           CREATE TABLE report (
            report_id INT PRIMARY KEY,
        
            columns, groupings, filters, sort
            also, should we persist the sequence of each of these object? We SHOULD if we want to make this an improvement.
            There should be a default sequence for NEW reports, however, yes we should UPDATE the DB once the user closes the modal not while they're fiddling, fiddling should show dynamically on the client but only send MUTATION to server once done.

        ,
          );


            - PO's can be "ONE ORDER -> AREA FOR ORDER"
            - OR they can be "ONE ORDER -> AREA BY ITEM"
            - IF "AREA BY ITEM", 
             
            */

//  This will contain the junction of
// CREATE TABLE orders_items (
//   po_id INT REFERENCES purchase_orders(po_id),
//   dashi_item_id INT REFERENCES dashi_item(dashi_item_id),

// )

export async function dropAccount(id) {
  try {
    const report = await sql`
          DROP DATABASE ${id};
          `;
  } catch (err) {
    console.log("error:", err.message);
  }
  return report;
}

// Resolvers are responsible for LINKING the schema field to the data source.

// graphql requests are parsed and validated against the schema
// graphql receives the request to determine WHAT the request even says because it's just a STRING essentially that requires a schema to be parsed and validated against.

// middleware modifies the request and response objects, terminate the execution and pass execution to the NEXT middleware function in the stack.

// then resolver functions are triggered which is like a controller
// middleware is where we keep our postgres client functionality and where we are going to FETCH our data from our database
// middleware functions split logic into chunks that handle SINGLE task and can be reused in the same project for different requests.

/*
 
- Authorization
- Extraction and storage of metrics
- Caching
- Debugging
- Fallback operations
- Input Validation
- Logging
- Output Manipulation
 
*/

// in GraphQL there is only TWO requests. Query and Mutation.
// Several graphQL servers have incorporated the concept of middleware to bne applied at the FIELD resolver level.

// the JSON that GraphQL converts the request to will then be used to interact with the DB

/*
 
- with @directives, they provide a ONE-WAY execution flow
- GraphQL provides some built-in @directives
-

*/

/*
 
 Except they resolve all the way down. What does that mean? Well therefore, resolvers resolving a type, and a type has a field that's referring to another type, and then that type has a field that's referring to another type.

You have to have a resolver for every single type all the way down, so it resolves all the way down depending on the query that came in. So if the query asks for those connections, I want this type that refers to this type, that refers to this type, then you have to have resolvers for every single level.
 
*/

/*
 
1) Every query and mutations your schema has MUST have a resolver that returns the specified type.

2) 
 
*/