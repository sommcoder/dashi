import { useRef, useState } from "react";
import { FaUpload } from "../../../node_modules/react-icons/fa";
import "./DropZone.css";

export default function DropZone() {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const [fileState, setFile] = useState(true);

  const handleDragEnter = (ev) => {
    ev.preventDefault();
    if (ev.dataTransfer.items[0].type !== "text/csv") setFile(false);
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setFile(true);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
  };

  return (
    <div
      className="dropzone-container"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {fileState ? (
        <h3 className="dropzone-text">Accepts .csv and .xlsx Files</h3>
      ) : (
        <h3 className="dropzone-text-error-message">
          file is not .csv or .xlsx format
        </h3>
      )}
      <FaUpload className="upload-svg-icon" />
      <button className="submit-file-button">Add files</button>
    </div>
  );
}
