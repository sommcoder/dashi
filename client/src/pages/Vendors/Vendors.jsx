import "./Vendors.css";
import Table from "../../components/Table/Table/Table";

export default function Vendors() {
  const tableName = "Vendors";
  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
