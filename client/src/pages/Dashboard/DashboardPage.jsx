import "./DashboardPage.css";
import Table from "../../components/Table/Table/Table.jsx";
// Route Loader to indicate that the page is loading
// import RouteLoader from "../../components/RouteLoader/RouteLoader";
import { useState } from "react";

// const fetchTables = async (type) => {
//   if (type === "display") {
//     const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/tables`).then(
//       (res) => res.json()
//     );
//     console.log("data:", data);
//     return data;
//   }
// };

export default function Dashboard() {
  // On the dashboard page we're going to have access to ALL of the tableNames and the user will be able to rearrange them as they see fit!

  /*
WHAT IS THE DASHBOARD PAGE? 
- a combination of all the things the users wishes to see 
- it's a snapshot of the businesses health
- Eventually incorporate d3.js charts

 eventually we should create a State object that controls the layout of the tables.  
 
 const dashboardSeq = [
  [[],[],[]],
  [[],[],[]],
  [[],[],[]]
 ];
*/

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
