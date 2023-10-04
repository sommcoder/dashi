import "./Table.css";
import Row from "../Row/Row";
import HeaderRow from "../HeaderRow/HeaderRow";
import SettingsHeader from "../SettingsHeader/SettingsHeader";
import RouteLoader from "../../RouteLoader/RouteLoader";
import DropZone from "../DropZone/DropZone";

import { Buffer } from "buffer/"; // Buffer library

import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState, Suspense } from "react";

export default function Table({ tableType }) {
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

  const [fileCount, addFile] = useState(0);

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
    console.log(ev.dataTransfer.items[0]);
    // ev.datatransfer.items only exists if there's more than one file dragged
    if (ev.dataTransfer.items) {
      console.log("ev.dataTransfer.items:", ev.dataTransfer.items);
      for (const item of ev.dataTransfer.items) {
        if (
          item.type !== "text/csv" &&
          item.type !== "pdf" &&
          item.type !== "application/pdf" &&
          item.type !==
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
          setFileValid(false);
          console.log(`file ${item} is NOT a valid file`);
        } else {
          setFileValid(true);
          console.log(`file ${item} is valid file`);
        }
      }
    }
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    console.log("LEAVE:", ev);
    setDrag(false);
    // setFileValid(null); // if we throw no arguments, will the state set to the original empty state??
  };

  // function Utf8ArrayToStr(array) {
  //   var out, i, len, c;
  //   var char2, char3;

  //   out = "";
  //   len = array.length;
  //   i = 0;
  //   while (i < len) {
  //     c = array[i++];
  //     switch (c >> 4) {
  //       case 0:
  //       case 1:
  //       case 2:
  //       case 3:
  //       case 4:
  //       case 5:
  //       case 6:
  //       case 7:
  //         // 0xxxxxxx
  //         out += String.fromCharCode(c);
  //         break;
  //       case 12:
  //       case 13:
  //         // 110x xxxx   10xx xxxx
  //         char2 = array[i++];
  //         out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
  //         break;
  //       case 14:
  //         // 1110 xxxx  10xx xxxx  10xx xxxx
  //         char2 = array[i++];
  //         char3 = array[i++];
  //         out += String.fromCharCode(
  //           ((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0)
  //         );
  //         break;
  //     }
  //   }
  //   return out;
  // }

  const handleDrop = (ev) => {
    ev.stopPropagation();
    ev.preventDefault(); // prevents file from being opened in the browser
    console.log("DROP ev:", ev);
    console.log("ev.dataTransfer.files:", ev.dataTransfer.files);

    // const reader = new FileReader();

    if (ev.dataTransfer.items) {
      for (const item of ev.dataTransfer.items) {
        const file = item.getAsFile(); // if Browser supports DataTransferItemList, otherwise dataTransfer
        // console.log("item.files:", item.files);
        // a file object is a special kind of Blob and can be used in ANY context that a Blob can
        console.log("file:", file);

        file.arrayBuffer().then((res) => {
          let arrayBuffer = new Uint8Array(res);
          let buffer = Buffer.from(arrayBuffer);
          console.log("buffer:", buffer);
          // let rawData = [...arrayBuffer];
          // console.log("rawData:", rawData);

          // var str = String.fromCharCode.apply(null, arrayBuffer);
          // console.log("str:", str);
          // let str = Utf8ArrayToStr(arrayBuffer);
          // console.log("str:", str);
          // let blob = new Blob([new Uint8Array(rawData)], { type: "pdf" });
          // console.log("blob:", blob);
          // const dataView = new DataView(); // used to edit an array buffer
        });

        // We want to retrieve the contents of a binary file (PDF, or maybe image file) so we want readAsArrayBuffer();

        // const readableStream = file.stream();

        // const reader = readableStream.getReader(); // gets an instance of ReadableStreamDefaultReader
        // let string = "";

        // reader
        //   .read()
        //   .then(({ value }) => {
        //     console.log("value:", value);
        //     console.log("typeof value:", typeof value);
        //     return value;
        //   })
        //   .then((value) => {
        //     const dataview = new DataView(value);
        //     console.log("dataview:", dataview);
        //   });
        // reader.readAsText(file);

        // if (
        //   item.type !== "text/csv" &&
        //   item.type !== "pdf" &&
        //   item.type !== "application/pdf" &&
        //   item.type !==
        //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        // ) {
        //   setFileValid(false);
        //   console.log(`file ${item} is NOT a valid file`);
        // } else {
        //   setFileValid(true);
        //   console.log(`file ${item} is valid file`);
        // }
      }
    }
    setDrag(false);
  };

  const colSizingSeqObj = {};

  // setup table or display table?

  let data = [" ", " ", " "];

  let headers = Object.keys(data[0]);

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

  if (tableType === "display") determineAvgColWidth(data, headers);

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
      </div>
    </Suspense>
  );
}
