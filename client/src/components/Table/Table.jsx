import "./Table.css";
import data from "../../data.json";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import { useState } from "react";

export default function Table() {
  /*
   
  1) Data is fetched from server
  2) Data is rendered based on default settings
  3) Data can be adjusted by user
   
  */

  // the state of the columns visibility:
  // columns can be reordered, boolean determines if values render in table
  // their existence and sequence determines if they're rendered
  const initColStateSeq = [
    "product_name",
    "product_category",
    "unit_price",
    "total_sales",
  ];

  // based on the sequence will determine which keys we access from our JSON data as we iterate through it

  const [currColState, adjustColumnState] = useState(initColStateSeq);

  const headers = Object.keys(data[0]);

  return (
    <div className="dashboard-table">
      <HeaderRow headers={headers} />
      {data.map((el, i) => (
        <Row key={i} el={el} headers={headers} />
      ))}
    </div>
  );
}
