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

async function addItems(itemsObj) {
  await fetch(`http://localhost:5000/api/v1/items`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemsObj),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (res) {
      console.log(res);
    });
}

export default function Items() {
  const tableName = "Items";
  // we can then use destructuring on the Result object based on what we ned to use from it
  // should be called on render if nothing in cache
  useQuery({
    queryKey: ["getAllItems"],
    queryFn: fetchItems(),
  });

  return (
    <div className="item-page-container">
      <Table tableName={tableName} />
    </div>
  );
}
