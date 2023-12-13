import "./Items.css";
import Table from "../../components/Table/Table/Table";
// import { GetAllItems } from "../../hooks/query";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

// Page FETCHES current data
// DropZone POSTS new data
async function fetchItems() {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/items`, {
      method: "GET",
      mode: "no-cors",
    });
    console.log("res:", res);
    const items = await res.json();
    console.log("items:", items);
    return items;
  } catch (err) {
    console.log("error:", err.message);
  }
}

export default function Items() {
  const tableName = "Items";
  // we can then use destructuring on the Result object based on what we ned to use from it
  // should be called on render if nothing in cache
  // this will be automatic once we have our dev DB set up with data
  useQuery({
    queryKey: ["getAllItems"],
    queryFn: fetchItems(),
    enabled: false,
  });

  return (
    <div className="item-page-container">
      <Table tableName={tableName} />
    </div>
  );
}
