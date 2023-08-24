import "./Dashboard.css";
import Table from "../Table/Table.jsx";
import RouteLoader from "../RouteLoader/RouteLoader";
import { useState, Suspense } from "react";

export default function Dashboard() {
  /*
 - Dashboard requests tables from server and passes down props to child components
   
  */
  // get data, make into arrays
  // dashboard GETS tables from server

  // dummy data, dashboard generates 2 tables:
  const tableArr = [1, 2];
  // should provide Loading components to indicate that the component is being generated / requested from the server

  const [tableSeq, setTableSeq] = useState(tableArr);

  return (
    <div className="dashboard-main">
      <Suspense fallback={<RouteLoader />}>
        {tableArr.map((el, i) => (
          <Table key={i} />
        ))}
      </Suspense>
    </div>
  );
}
