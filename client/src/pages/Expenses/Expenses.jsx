import "./Expenses.css";
import Table from "../../components/Table/Table/Table";

export default function Expenses() {
  const tableName = "Expenses";

  return (
    <div className="expenses-page-container">
      <Table tableName={tableName} />
    </div>
  );
}
