import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import { useQuery, useQueryClient } from "react-query";

import { useEffect, useState, Suspense } from "react";

export default function Table() {
  let initColStateSeq = [];
  const columnWidthObj = {};

  // set state based on incoming data:
  const [columnWidth, setColumnWidth] = useState(columnWidthObj);
  // const [currColState, adjustColumnState] = useState(initColStateSeq);

  const fetchTables = async () => {
    const data = await fetch(`${import.meta.env.VITE_SERVER_URL}/tables`).then(
      (res) => res.json()
    );
    console.log("data:", data);
    return data;
  };

  // fetch data from server:
  const { data, isInitialLoading } = useQuery("table-data", fetchTables, {
    suspense: true,
  });

  initColStateSeq = Object.keys(data[0]);
  initColStateSeq.forEach((el) => (columnWidthObj[el] = 3));

  // other state:
  const [tableDisplay, setTableDisplay] = useState(true);

  // set values based on fetched data:
  const cols = {
    gridTemplateColumns: `repeat(${initColStateSeq.length}, 1 fr)`,
  };

  console.log("data:", data);

  /*
  - How do we allow the resize bar the ability to adjust the size of the columns?
  - we make the width of the columns be a state value that gets updated as we adjust it incrementally?
*/

  // how to get icons onto the header whilst keeping the columns aligned?

  // the quick thought is that the icons need to be agnostic/independent of the actual table

  // the "rows" for the tables should just be 3 things: the top adjustment header, the headerRow and then the table content itself
  const rows = {
    gridTemplateRows: `3rem auto 0`,
  };

  // based on the sequence will determine which keys we access from our JSON data as we iterate through it

  if (isInitialLoading) {
    return <div>loading...</div>;
  } else {
    return (
      <div style={rows} draggable className="dashboard-table">
        <SettingsHeader
          tableDisplay={tableDisplay}
          setTableDisplay={setTableDisplay}
        />
        <HeaderRow tableDisplay={tableDisplay} headers={initColStateSeq} />
        {data.map((el, i) =>
          tableDisplay ? (
            <Row
              columnWidth={columnWidth}
              tableDisplay={tableDisplay}
              key={`row-${i}`}
              el={el}
              headers={initColStateSeq}
            />
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}
