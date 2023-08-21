﻿import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import { useQuery, useQueryClient } from "react-query";

import { useEffect, useState, Suspense } from "react";

export default function Table() {
  const colSizingSeqObj = {};

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

  // this is an initial number of columns based on the users selected columns they'd like to view and what the headers will be named:
  let headers = Object.keys(data[0]);
  determineAvgColWidth(data, headers);
  // assign each el in array to 3 as a default column width:
  const initColSizingSeq = []; // this is an array of the size of each column

  // maybe we just having header sizing be initially determined by hard-coded values. User doesn't need to adjust this, too much control and this way... MAYBE we have the system determine the width of the columns onLoad based on the average CHAR length of the incoming data?
  function getMedian(valArr) {
    if (valArr.length === 0) throw new Error("No inputs");
    return valArr.sort((a, b) => a - b);
  }

  function determineAvgColWidth(dataArr, headers) {
    // go through each header
    headers.forEach((header) => {
      let lengthTracker = [];
      // extract the data from each obj with the corresponding header
      dataArr.forEach((el) => {
        lengthTracker.push(el[header].length);
      });
      initColSizingSeq.push(getMedian(lengthTracker));
    });
  }

  console.log("initColSizingSeq:", initColSizingSeq);

  /*
   
  Maybe we make the headRow a flexbox? 
  - when the header resizeBars get adjusted, the text would adjust accourdingly, right?
   
  */

  console.log("initColSizingSeq:", initColSizingSeq);
  // assign each element in Array to 3 as a default column width:

  // set state based on incoming data:
  const [colSizingSeq, adjustColSizingSeq] = useState(initColSizingSeq);

  // minimize and view tables:
  const [tableDisplay, setTableDisplay] = useState(true);

  // from the state array, we update this string which our rows get generated from. This accounts for the length of the resize container
  const colStyleString = colSizingSeq.join("rem 20px ") + "rem";
  // header and rows need to be generated from the same style sizing data/state
  console.log("colStyleString:", colStyleString);

  /*
  Header = Flex?
  Rows = Grid? 

  - The grid rows would be generated based on the spacing of the flex header row???
  - So this would be a CONTENT-OUT approach for the header which would determine the column spacing for the rows since the content in the rows between each cell differs greatly and we want all of the cells to line up with the header, right?


  - The problem with this is that HeaderRow would detemine the spacing and we'd need to push that state to Table and 

  - How would Table determine the css of HeaderRow AND also pass down that calculation to Row????

  - How do we allow the resize bar the ability to adjust the size of the columns?
  - we make the width of the columns be a state value that gets updated as we adjust it incrementally?
*/

  // how to get icons onto the header whilst keeping the columns aligned?

  // the quick thought is that the icons need to be agnostic/independent of the actual table

  // the "rows" for the tables should just be 3 things: the top settingsHeader, the headerRow and then the table content itself
  const rows = {
    gridTemplateRows: `3rem auto 0`,
  };

  // based on the sequence will determine which keys we access from our JSON data as we iterate through it

  if (isInitialLoading) {
    return <div>loading...</div>;
  } else {
    return (
      <div style={rows} draggable={true} className="dashboard-table">
        <SettingsHeader
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
    );
  }
}
