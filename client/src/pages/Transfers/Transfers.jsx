import "./Transfers.css";
import Table from "../../components/Table/Table/Table";

export default function Transfers() {
  const tableName = "Transfers";
  return (
    <div>
      <Table tableName={tableName} />
    </div>
  );
}
