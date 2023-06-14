import { useRef, useState } from "react";
import { FaUpload } from "../../../node_modules/react-icons/fa";
import "./DropZone.css";

export default function DropZone() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const [dragState, setDrag] = useState(false);
  const [fileValidity, setFile] = useState(true);

  const handleDragEnter = (ev) => {
    ev.preventDefault();
    // for of works, ev.dataTransfer.items is an iterable object NOT an array
    for (const item of ev.dataTransfer.items) {
      if (
        item.type !== "text/csv" &&
        item.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setDrag(true);
        setFile(false);
      }
      return;
    }
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setDrag(false);
    setFile(true);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
  };

  return (
    <div
      id={
        fileValidity
          ? "dropzone-container"
          : "dropzone-container-error dropzone-container"
      }
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        id={fileValidity ? "submit-file-button" : "hidden"}
        className={dragState ? "dragging" : ""}
      >
        Add files
      </button>
      <input id="hidden" className="dragging" type="file" title=" " hidden />
      <FaUpload
        id={fileValidity ? "upload-svg-icon" : "hidden"}
        className={dragState ? "dragging" : ""}
      />

      <h3
        className={dragState ? "dragging" : ""}
        id={fileValidity ? "dropzone-text" : "dropzone-text-error-message"}
      >
        {fileValidity
          ? "Accepts .csv, .xsl and .xlsx files"
          : "file is not .csv, .xsl or .xlsx format"}
      </h3>
    </div>
  );
}

/*
 
1) drag State
2) fileValidity State 
3) these things can happen together or individually
 
*/
