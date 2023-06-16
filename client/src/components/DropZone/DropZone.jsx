import { useRef, useState } from "react";
import { FaUpload } from "../../../node_modules/react-icons/fa";
import "./DropZone.css";

export default function DropZone() {
  const inputState = "default";

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

  const textState = {
    default: "Accepts .csv, .xsl and .xlsx files",
    valid: "Drop file(s) to upload",
    invalid: "file is not .csv, .xsl or .xlsx format",
  };

  const [dragState, setDrag] = useState(false);
  const [currInputState, setInputState] = useState(inputState);

  function checkId(currInputState) {
    if (inputState === "default") return idState.default;
    if (inputState === "valid") return idState.valid;
    if (inputState === "invalid") return idState.invalid;
  }

  function checkText(currInputState) {
    if (inputState === "default") return textState.default;
    if (inputState === "valid") return textState.valid;
    if (inputState === "invalid") return textState.invalid;
  }

  ///////////////////////////////

  const handleDragEnter = (ev) => {
    ev.preventDefault();
    // for of works, ev.dataTransfer.items is an iterable object NOT an array
    for (const item of ev.dataTransfer.items) {
      if (
        item.type !== "text/csv" &&
        item.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setInputState({
          ...currInputState,
          state: "invalid",
        });
      } else {
        setInputState({
          ...currInputState,
          state: "valid",
        });
      }
      setDrag(true);
      return;
    }
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setDrag(false);
    setInputState({
      ...currInputState,
      state: "default",
    });
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
  };

  return (
    <div
      className={dragState ? "dragging" : ""}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        id={checkId(currInputState)}
        className={dragState ? "dragging" : ""}
      >
        Add files
      </button>
      <input id="hidden dragging" type="file" title=" " hidden />
      <FaUpload
        id={checkId(currInputState)}
        className={dragState ? "dragging" : ""}
      />

      <h3 className={dragState ? "dragging" : ""} id={checkId(currInputState)}>
        {checkText(currInputState)}
      </h3>
    </div>
  );
}
