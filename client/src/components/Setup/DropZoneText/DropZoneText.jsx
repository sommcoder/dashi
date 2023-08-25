import "./DropZoneText.css";

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
