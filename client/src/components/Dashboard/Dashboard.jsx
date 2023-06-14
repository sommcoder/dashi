import "./Dashboard.css";
import Table from "../Table/Table.jsx";

export default function Dashboard() {
  // get data, make into arrays
  // dashboard GETS tables from server

  // dummy data, dashboard generates 2 tables:
  const tableArr = [1, 2];

  return (
    <div className="dashboard-main">
      {tableArr.map((el, i) => (
        <Table key={i} />
      ))}
    </div>
  );
}
