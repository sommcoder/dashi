import "./PurchaseOrders.css";

import Table from "../../components/Table/Table/Table";

export default function PurchaseOrders() {
  const tableName = "Purchase Orders";
  /*
 
- User creates a requisition, user can select if they wish to have an auto-PO so that when the vendor confirms a PO is automatically sent.
- User can add existing items OR they can just type out a general description.
- Users will be required to add an estimated price.
- If vendor edits the price. Email will be sent for the user to confirm.
- IF they have the auto-PO enabled then this means Dashi will create an item with what they've provided but ONLY if they've given a title, category and cost. If not, the PO will not be created and will require the user to add REAL Dashi items to the PO.

- the PO page will include an option to send an initial requisition to the vendor and allow them to submit an "expected delivery" range and time (if user wishes).
- PO's will include an AREA as an optional part of the form.
- AS WELL as receiving instructions as a default

- GOTTA INCLUDE THE CUSTOM FIELD OPTION. ITS PRETTY AWESOME! BUT THEY SHOULD ALSO BE AVAILABLE ON THE MOBILE APP! 

- Once the vendor clicks a button/link on the email, a PO will be automatically sent.
 
*/

  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
