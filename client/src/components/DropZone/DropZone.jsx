// libraries:
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";

// styling:
import { FaUpload } from "../../../node_modules/react-icons/fa";
import "./DropZone.css";

function DropZoneText({ dragState, fileValid }) {
  const textState = {
    default: "Accepts .csv, .xsl and .xlsx files",
    valid: "Drop file(s) to upload",
    invalid: "file is not .csv, .xsl or .xlsx format",
  };

  return (
    <>
      {dragState ? (
        <h3>{fileValid === true ? textState.valid : textState.invalid}</h3>
      ) : (
        <h3>{textState.default}</h3>
      )}
    </>
  );
}

export default function DropZone() {
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

  const queryClient = useQueryClient(); // Now, at the component level, we call useQueryClient

  // queries:
  const query = useQuery({
    queryKey: "table-data", // this is the key to reference the fetched data
    queryFn: () => {
      fetch(`${import.meta.env.VITE_URL}/tables`, {
        method: "GET",
        mode: "no-cors",
      }).then((res) => {
        console.log("res:", res);
        const tableData = res.json();
        console.log("tableData:", tableData);
      });
    },
  });
  // queryFn MUST return a promise to either be resolved or throw an error
  // queryFn is the function that the query will use to request data

  /*
  1) File is Valid, File is NOT valid = determines CSS
    File is valid
    Blue Background, dark border, no drag clipping


  2) no action = default text/css
  3) default text, invalid text, valid text
   
  */

  const [dragState, setDrag] = useState(false);
  const [fileValid, setFileValid] = useState(false);
  // on DragEnd => setFileValidity(null)

  ///////////////////////////////

  const handleDragOver = (ev) => {
    ev.preventDefault();
    console.log("OVER:", ev);
    setDrag(true);
    // for of works, ev.dataTransfer.items is an iterable object NOT an array
    for (const item of ev.dataTransfer.items) {
      if (
        item.type !== "text/csv" &&
        item.type !== "pdf" &&
        item.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setFileValid(false);
      } else {
        setFileValid(true);
      }
    }
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    console.log("LEAVE:", ev);
    setDrag(false);
    setFileValid(false); // if we throw no arguments, will the state set to the original empty state??
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    console.log("ev:", ev);
    setDrag(false);
  };

  return (
    <div
      className="dropzone-container"
      onDragStart={handleDragOver}
      onDragEnd={handleDragLeave}
      onDrop={handleDrop}
    >
      <button className="submit-file-button">Add files</button>
      <input id="hidden" type="file" title=" " hidden />
      <FaUpload className="upload-svg-icon" />
      <DropZoneText
        fileValid={fileValid}
        dragState={dragState}
        className="dropzone-text"
      />
    </div>
  );
}
