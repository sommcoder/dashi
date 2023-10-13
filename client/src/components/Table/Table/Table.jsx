﻿import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import RouteLoader from "../../RouteLoader/RouteLoader";

import { useQuery } from "@apollo/client";

import { useEffect, useState, Suspense } from "react";

import * as gql from "./table-graphql";

export default function Table({ tableType, reportId }) {
  // Reports
  // reportId gets passed down from the PAGE
  // add file to a Report
  const { loading, error, data } = useQuery(gql.GET_REPORT, {
    variables: {
      reportId: reportId,
    },
  });

  /*
  DATA FETCHING:
- Trying to make Table component REUSABLE across Pages. 
- SO IT IS THE PAGE THAT SHOULD FETCH THE DATA, the table is data agnostic
- ALSO the table could be a DISPLAY or a SETUP table
- Either it fetches data from the API OR simply provides blank table data 
- we must rely on the "tableType" prop to determine how the table will render
*/

  /*
 
DATA INPUT / DRAG N DROP:
- send data to server
- can we parse CSV on the client?
 
*/

  const containerState = {
    default: "dropzone-container",
    valid: "file-valid",
    invalid: "file-invalid",
  };

  const childrenState = {
    default: "dropzone-container",
    valid: "file-valid",
    invalid: "file-invalid",
  };

  const textState = [
    "Accepts .csv, .xsl and .xlsx files",
    "Drop file(s) to upload",
    "file is not .csv, .xsl or .xlsx format",
  ];

  const { isLoading, switchLoading } = useState(true);

  /*
  1) File is Valid, File is NOT valid = determines CSS
    File is valid
    Blue Background, dark border, no drag clipping


  2) no action = default text/css
  3) default text, invalid text, valid text


  ** dropzone should REMOVE duplicate Headers as part of it's validation process **
   
  */

  const [dragState, setDrag] = useState(false);
  const [fileValid, setFileValid] = useState(null); // null = default,

  ///////////////////////////////
  /*
 
- Why does the dragOver function not work?
- Is the event not firing?
 
*/

  const handleDragOver = (ev) => {
    ev.preventDefault(); // NEEDED!
    setDrag(true);
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    console.log("LEAVE:", ev);
    setDrag(false);
  };

  const handleDrop = (ev) => {
    ev.stopPropagation();
    ev.preventDefault(); // prevents file from being opened in the browser
    console.log("DROP ev:", ev);
    console.log("ev.dataTransfer.files:", ev.dataTransfer.files);

    // add file to a Report
    const { loading, error, data } = useQuery(gql.POST_FILE, {
      variables: {
        reportId: reportId,
      },
    });

    setDrag(false);
  };

  const colSizingSeqObj = {};

  // setup table or display table?

  let dataRow = [" ", " ", " "];

  let headers = Object.keys(dataRow[0]);

  /*
   
 - Table component will determine it's styling based on the incoming data from the Page!
   
  */
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

  if (tableType === "display") determineAvgColWidth(dataRow, headers);

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
  const tableName = "";

  // console.log("tableType:", tableType);

  return (
    <Suspense fallback={<RouteLoader />}>
      <div
        className={`data-table-dropzone ${dragState ? "dragging" : ""}`}
        onDragOver={(ev) => handleDragOver(ev)}
        onDragLeave={(ev) => handleDragLeave(ev)}
        onDrop={(ev) => handleDrop(ev)}
      >
        <div style={rows} draggable={true} className="data-table">
          <SettingsHeader
            tableName={tableName}
            tableDisplay={tableDisplay}
            setTableDisplay={setTableDisplay}
            tableType={tableType}
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
