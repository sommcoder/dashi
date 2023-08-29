// libraries:
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
// styling:
import { FaUpload } from "../../../../node_modules/react-icons/fa";
import "./DropZone.css";
// components:
import ValidationText from "../ValidationText/ValidationText";
import DropZoneText from "../DropZoneText/DropZoneText";
import FileTally from "../FileTally/FileTally";

const MAX_SIZE = 500000; // in bytes

export default function DropZone({ setHeaders }) {
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
        setHeaders();
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
    <div className="dropzone-container">
      <ValidationText />
      <div
        className="dropzone"
        onDragStart={handleDragOver}
        onDragEnd={handleDragLeave}
        onDrop={handleDrop}
      >
        <button className="add-file-button">Add files</button>
        <input id="hidden" type="file" title=" " hidden />
        <FaUpload className="upload-svg-icon" />
        <DropZoneText
          fileValid={fileValid}
          dragState={dragState}
          className="dropzone-text"
        />
        <FileTally fileCount={fileCount} />
      </div>
      {/* <button className="dropzone-submit-button">Submit</button> */}
    </div>
  );
}
