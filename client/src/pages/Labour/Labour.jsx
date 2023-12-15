import "./Labour.css";
import Table from "../../components/Table/Table/Table";

export default function Labour() {
  const tableName = "Labour";

  return (
    <div className="labour-page-container">
      <Table tableName={tableName} />
    </div>
  );
}
