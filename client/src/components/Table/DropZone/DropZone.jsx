import "./DropZone.css";
import { useState } from "react";
import { addFiles } from "../../../api/files";

import { useMutation } from "@tanstack/react-query";

export default function DropZone() {
  const mutation = useMutation({
    queryKey: ["addFiles"],
    mutationFn: (fileListArr) => addFiles(fileListArr),
    onSuccess: () => {
      console.log("React Query: Your file was successfully uploaded");
    },
  });

  /*
   
  *** include Warn message to user: 

  For most accurate OCR results from Document AI, document scans should be a minimum of 200 dpi (dots per inch). 300 dpi and higher will generally produce the best results.
   
  */

  /*
    - DropZone needs to get the information and then send it UP to the Table component.
    - Otherwise the rerending of DropZone needs to be isolated in DropZone and not cause a rerending on the entire Table when a file is dragged
    - DropZone controls client-side file validation. If the file(s) are valid,  setFileValid() state gets called


    1) User drags file, client side validation is automatically performed. If valid user can drop. If invalid perhaps a popup will explain why file is invalid

    2) 
*/
  // the color states can be switched on and off

  let pageName = "items"; // will need to be passed down from page

  // const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [dragState, setDrag] = useState(false);
  const [fileValid, setFileValid] = useState();

  const VALID_FILES_ARR = [
    "text/csv",
    "application/pdf",
    "pdf",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];

  const handleDragOver = (ev) => {
    ev.preventDefault();
    setDrag(true);

    // validation:
    for (const item of ev.dataTransfer.items) {
      if (VALID_FILES_ARR.includes(item.type)) {
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
    ev.preventDefault();
    setDrag(false);
    mutation.mutate(ev.dataTransfer.files);
  };

  return (
    <div
      className={`data-table-dropzone 
      ${dragState ? `dragging ${fileValid ? "valid" : "invalid"}` : ""}
      `}
      onDragOver={(ev) => handleDragOver(ev)}
      onDragLeave={(ev) => handleDragLeave(ev)}
      onDrop={(ev) => handleDrop(ev)}
    >
      {mutation.isLoading ? (
        <div className="loading-progress-bar-container">
          <div className="loading-progress-bar"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

/*
 
 ${dragState ? "dragging" : ""}
  ${fileValid ? "valid" : ""}
  ${fileInvalid ? "invalid" : ""}`}
 
*/
