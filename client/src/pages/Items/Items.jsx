import "./Items.css";
import Table from "../../components/Table/Table/Table";
// import { GetAllItems } from "../../hooks/query";

import { useQuery } from "@tanstack/react-query";

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
  // we can then use destructuring on the Result object based on what we ned to use from it
  // should be called on render if nothing in cache
  useQuery({
    queryKey: ["getAllItems"],
    queryFn: fetchItems(),
  });

  return (
    <div>
      <Table />
    </div>
  );
}
