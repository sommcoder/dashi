import "./Invoices.css";

import Table from "../../components/Table/Table/Table";

export default function Invoices() {
  const tableName = "Invoices";
  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
