import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import DropZone from "../DropZone/DropZone";

import RouteLoader from "../../RouteLoader/RouteLoader";

import { useEffect, useState, Suspense } from "react";

export default function Table({ tableName, tableData, reportId }) {
  // NOTES:
  /*
  DATA FETCHING:
- Trying to make Table component REUSABLE across Pages. 
- Table is merely a VESSEL for data to be displayed. The particular page the user is viewing is where the data is being fetched from.
- SO IT IS THE PAGE THAT SHOULD FETCH THE DATA, the table is data agnostic
- Or do we just do one large data fetch on site visit? This creates a longer Time To Interactivity.. however would have payoffs in that it would be easier to move through pages smoothly and quickly.
- ALSO the table could be a DISPLAY or a SETUP table
- Either it fetches data from the API OR simply provides blank table data 
- we must rely on the "tableType" prop to determine how the table will render


Table will need:
1) Item Calls
2) Sales Calls

... then:
3) Purchase Order Calls
4) Invoice Calls

... and eventually:
5) Inventory Calls
+ other functionality


  
DATA INPUT / DRAG N DROP:
- send data to server
- can we parse CSV on the client?

  1) File is Valid, File is NOT valid = determines CSS
    File is valid
    Blue Background, dark border, no drag clipping


  2) no action = default text/css
  3) default text, invalid text, valid text


  ** dropzone should REMOVE duplicate Headers as part of it's validation process **
   
  */

  ////////////////////////////////////////////////////////////
  //////////////////// DYNAMIC STYLING ///////////////////////
  ////////////////////////////////////////////////////////////
  const colSizingSeqObj = {};

  // - setup table or display table?
  // - Are setup tables just every table? user should just be able to drag and drop and then the table BECOMES a "display" table. Therefore we need not bother with controlling this.
  // - There's tables YET to be populated and tables that are populated..
  // PROs: this would help with be intuitive and require less overhead. It may require a turorial popup however

  let dataRow = [" ", " ", " "];

  let headers = Object.keys(dataRow[0]);

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

  determineAvgColWidth(dataRow, headers);

  // console.log("initColSizingSeq:", initColSizingSeq);

  let colStyleString = "";

  // only compose string if we have headers in the seq Array:
  if (initColSizingSeq.length) {
    colStyleString =
      "20px " +
      initColSizingSeq
        .map((el) => {
          if (el <= 8) return (el += 3.25);
          else return (el *= 0.9);
        })
        .join("rem 20px ") +
      "rem"; // <-- for the last element in the array
  } else {
    // just the checkbox:
    colStyleString = "20px";
  }

  // console.log("colStyleString:", colStyleString);

  // set state based on incoming data:
  const [colSizingSeq, adjustColSizingSeq] = useState(colStyleString);
  // minimize and view tables:
  const [tableDisplay, setTableDisplay] = useState(true);
  // the "rows" for the tables should just be 3 things: the top settingsHeader, the headerRow and then the table content itself
  const rows = {
    gridTemplateRows: `3rem auto 0`,
  };
  // based on the sequence will determine which keys we access from our JSON data as we iterate through it
  ////////////////////////////////////////////////////////////////

  return (
    <Suspense fallback={<RouteLoader />}>
      <div className="data-table-wrapper" draggable={true}>
        <DropZone tableName={tableName} />
        <div style={rows} className="data-table">
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
          {dataRow.map((el, i) =>
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
      </div>
    </Suspense>
  );
}
