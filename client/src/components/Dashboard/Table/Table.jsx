﻿import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import RouteLoader from "../../RouteLoader/RouteLoader";

import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState, Suspense } from "react";

const fetchTables = async (type) => {
  if (type === "display") {
    const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/tables`).then(
      (res) => res.json()
    );
    console.log("data:", data);
    return data;
  }
};

export default function Table({ tableType }) {
  /*
- Trying to make Table component REUSABLE across Pages. 
- SO IT IS THE PAGE THAT SHOULD FETCH THE DATA, the table is data agnostic
- ALSO the table could be a DISPLAY or a SETUP table
- Either it fetches data from the API OR simply provides blank table data 
- we must rely on the "tableType" prop to determine how the table will render
*/

  const colSizingSeqObj = {};

  // setup table or display table?

  // fetch data from server:
  let { data, isLoading } = useQuery(["table-data"], fetchTables(tableType), {
    suspense: true,
  });

  data = data || [" ", " ", " "];

  let headers = Object.keys(data[0]);

  const initColSizingSeq = []; // this is an array of the size of each column

  function getAverage(valArr) {
    // console.log("valArr:", valArr);
    if (valArr.length === 0) throw new Error("No inputs");
    let sum = valArr.reduce((prev, curr) => prev + curr);
    return Math.trunc(sum / valArr.length, 0);
  }

  function determineAvgColWidth(dataArr, headers) {
    // go through each header
    headers.forEach((header) => {
      let lengthTracker = [];
      // extract the data from each obj with the corresponding header
      dataArr.forEach((el) => {
        lengthTracker.push(el[header].toString().length);
      });
      // after each pass of the data by Header:
      initColSizingSeq.push(getAverage(lengthTracker));
    });
  }

  if (tableType === "display") determineAvgColWidth(data, headers);

  console.log("initColSizingSeq:", initColSizingSeq);

  const colStyleString =
    "20px " +
    initColSizingSeq
      .map((el) => {
        if (el <= 8) return (el += 3.25);
        else return (el *= 0.9);
      })
      .join("rem 20px ") +
    "rem";

  // set state based on incoming data:
  const [colSizingSeq, adjustColSizingSeq] = useState(colStyleString);
  // minimize and view tables:
  const [tableDisplay, setTableDisplay] = useState(true);

  // the "rows" for the tables should just be 3 things: the top settingsHeader, the headerRow and then the table content itself
  const rows = {
    gridTemplateRows: `3rem auto 0`,
  };

  // based on the sequence will determine which keys we access from our JSON data as we iterate through it

  const tableName = "";

  return (
    <Suspense fallback={<RouteLoader />}>
      <div style={rows} draggable={true} className="dashboard-table">
        <SettingsHeader
          tableName={tableName}
          tableDisplay={tableDisplay}
          setTableDisplay={setTableDisplay}
        />
        <HeaderRow
          tableDisplay={tableDisplay}
          adjustColSizingSeq={adjustColSizingSeq}
          colSizingSeq={colSizingSeq}
          headers={headers}
          colStyleString={colStyleString}
        />

        {data.map((el, i) =>
          tableDisplay ? (
            <Row
              colStyleString={colStyleString}
              tableDisplay={tableDisplay}
              key={`row-${i}`}
              data={el}
            />
          ) : (
            ""
          )
        )}
      </div>
    </Suspense>
  );
}
