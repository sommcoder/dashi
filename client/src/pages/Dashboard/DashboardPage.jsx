import "./DashboardPage.css";
import Table from "../../components/Table/Table/Table.jsx";
import RouteLoader from "../../components/RouteLoader/RouteLoader";
import { useState } from "react";

const fetchTables = async (type) => {
  if (type === "display") {
    const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/tables`).then(
      (res) => res.json()
    );
    console.log("data:", data);
    return data;
  }
};

export default function Dashboard() {
  // fetch data from server:
  // let { data, isLoading } = useQuery(["table-data"], fetchTables(tableType), {
  //   suspense: true,
  // });

  /*
WHAT IS THE DASHBOARD PAGE? 

- a combination of all the things the users wishes to see 
- it's a snapshot of the businesses health



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
      {tableArr.map((el, i) => (
        <Table key={i} />
      ))}
    </div>
  );
}
