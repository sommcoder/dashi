const importantFields = {
  mimeType: "application/pdf",
  entities: [
    {
      textAnchor: {
        content: "Sep 30, 2019",
        textSegments: [{ startIndex: "635", endIndex: "645" }],
      },
      type: "due_date", // this is the Invoice Parser terms ?
      confidence: 0.99, // only accept 90%+ warn user if lower
      id: "0",
      normalizedValue: {
        text: "2019-09-30",
        dateValue: {
          year: 2019,
          month: 9,
          day: 30,
        },
      },
      // entities with properties are potentially "line_items"
      // if type = "line_item" -> check for properties?
      properties: [{ mentionText: "", type: "", confidence: 0.75, id: "" }],
    },
  ],
};

// Get and process data server side, only send necessary data to client
// Loop through data.entities array
// element.textAnchor?.content = what was detected on page (not always available)
// element.type = the document AI term assigned to it based on the processor in the req
// element.confidence
// element.normalizedData?.dateValue : if date, use normalizedValue

// sometimes there will be MULTI lined content. so should search for "\n"

/*
 
1) User drags and drops document into a table on a page, client validation.
2) app makes server call, server validation, server calls document AI
3) server receives response, handles data
4) server returns the key/value pairs that may be relevant to the user's document
5) user then selects the headers/kv pairs that they DON'T need (opt-out)
6) App will assign template name to be: "Vendor-<doc-type>" so "Living Vine-Invoice" or "Uber Eats-Expense" app will give an id to this "template". App should throw warning if template is TOO SIMILAR or the SAME as an existing template as to not bloat/confuse the app. Users will be encouraged to select the minimum amount of information they need and no more than that and to consider future instances of that doc type.

Basically, the template will be named based on the page or table-type that the file is dropped into.

7) This template save gets sent to the server and saved on the DB for future sessions. We will also mark the vendor as having a template and connect it to the template Table.
8) This template also gets cached for the session.
8) User will repeat the process, drag and drop
9) If app detects that this vendor has been used -> use the saved template
10) Should allow multiple templates per vendor in the instance of

11) The benefits of templating is that next time a file detected as


12) IDEALLY, this could be used to train a custom model for the user. each user would have a pretrained model based on invoices/expenses but based on their input the model would "learn" and be able to return more accurate information the more the app is used.
 
*/

/*
 
Best Practices:

- When making requests with the same library, you should REUSE the same client object for MANY requests when possible, instead of creating a new one for every request. Requests from the same instance will share authentication credential instances

- The initial request can take multiple seconds over a network
- For additional calls on the same client instance, the session client reuses the same access token for as long as it is valid (typically ONE HOUR).

 
*/

// INVOICE PARSER - FIELDS DETECTED
// 15 pages MAX at once, 200 in a batch/offline request (no user access)

/*
 
amount_paid_since_last_invoice
carrier
currency
currency_exchange_rate
delivery_date
due_date
freight_amount
invoice_date
invoice_id
line_item
line_item/amount
line_item/description
line_item/product_code
line_item/purchase_order
line_item/quantity
line_item/unit
line_item/unit_price
net_amount
payment_terms
purchase_order
receiver_address
receiver_email
receiver_name
receiver_phone
receiver_tax_id
receiver_website
remit_to_address
remit_to_name
ship_from_address
ship_from_name
ship_to_address
ship_to_name
supplier_address
supplier_email
supplier_iban
supplier_name
supplier_payment_ref
supplier_phone
supplier_registration
supplier_tax_id
supplier_website
total_amount
total_tax_amount
vat
vat/amount
vat/category_code
vat/tax_amount
vat/tax_rate
 



EXPENSE PARSER - FIELDS DETECTED
10 pages MAX at once, 10 in a batch/offline request (no user access)

credit_card_last_four_digits
currency
end_date
net_amount
payment_type
purchase_time
receipt_date
start_date
supplier_address
supplier_city
supplier_name
tip_amount
total_amount
total_tax_amount
line_item
line_item/amount
line_item/description
line_item/product_code

*/
