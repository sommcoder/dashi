import "./DropZone.css";
import { useState } from "react";

export default function DropZone() {
  /*
    - DropZone needs to get the information and then send it UP to the Table component.
    - Otherwise the rerending of DropZone needs to be isolated in DropZone and not cause a rerending on the entire Table when a file is dragged
    - DropZone controls client-side file validation. If the file(s) are valid,  setFileValid() state gets called


    1) User drags file, client side validation is automatically performed. If valid user can drop. If invalid perhaps a popup will explain why file is invalid

    2) 
*/
  // the color states can be switched on and off

  let pageName = "items"; // will need to be passed down from page

  const [dragState, setDrag] = useState(false);
  const [fileValid, setFileValid] = useState();

  const validFileTypes = [
    "text/csv",
    "application/pdf",
    "pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleDragOver = (ev) => {
    ev.preventDefault();
    setDrag(true);
    for (const item of ev.dataTransfer.items) {
      if (validFileTypes.includes(item.type)) {
        setFileValid(true);
      } else {
        setFileValid(false);
      }
    }
  };

  const handleDragLeave = (ev) => {
    ev.preventDefault();
    setDrag(false);
    setFileValid("");
  };

  const handleDrop = (ev) => {
    ev.stopPropagation();
    ev.preventDefault(); // prevents file from being opened in the browser
    console.log("DROP ev:", ev);
    console.log("ev.dataTransfer.files:", ev.dataTransfer.files);
    setDrag(false);
  };
  return (
    <div
      className={`data-table-dropzone 
      ${dragState ? `dragging ${fileValid ? "valid" : "invalid"}` : ""}`}
      onDragOver={(ev) => handleDragOver(ev)}
      onDragLeave={(ev) => handleDragLeave(ev)}
      onDrop={(ev) => handleDrop(ev)}
    >
      <h5 className="dropzone-text">
        {`
         ${
           dragState
             ? `${
                 fileValid
                   ? `Drop file(s) to add to ${pageName}`
                   : "file is not .csv, .xsl or .pdf format"
               }`
             : ""
         }`}
      </h5>
    </div>
  );
}

/*
 
 ${dragState ? "dragging" : ""}
  ${fileValid ? "valid" : ""}
  ${fileInvalid ? "invalid" : ""}`}
 
*/
