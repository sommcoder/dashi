import "./Inventories.css";
import Table from "../../components/Table/Table/Table";

export default function Inventories() {
  const tableName = "Inventory Audit";
  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
