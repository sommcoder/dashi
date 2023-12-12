import "./Sales.css";
import Table from "../../components/Table/Table/Table";

export default function Sales() {
  const tableName = "Sales";
  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
