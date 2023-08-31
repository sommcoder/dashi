import { useState } from "react";
import "./UploadRow.css";

export default function UploadRow({
  headerName,
  headerArr,
  seqTrackerObj,
  setSeqTrackerObj,
  adjustCount,
  nextCount,
}) {
  // UI State:
  const [selected, toggleSelection] = useState();
  const [disable, toggleDisable] = useState();

  // sets clicked header to 0
  // decrements selected headers if header > current header
  function decrementSelectedHeaders(newSeqTrackerObj) {
    const valueDeactivated = newSeqTrackerObj[headerName];
    newSeqTrackerObj[headerName] = 0;

    headerArr.forEach((key) => {
      if (newSeqTrackerObj[key] > valueDeactivated) newSeqTrackerObj[key]--;
    });

    toggleSelection(false);
    adjustCount(--nextCount);
    setSeqTrackerObj(newSeqTrackerObj);
  }

  function handleHeaderClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("START nextCount:", nextCount);

    if (disable && !selected) return toggleDisable(false);

    const newSeqTrackerObj = seqTrackerObj;

    if (!selected) {
      toggleSelection(true); // updates UI
      newSeqTrackerObj[headerName] = nextCount; // update curr header w. nextCount
      setSeqTrackerObj(newSeqTrackerObj); // update header trackerObj
      adjustCount(++nextCount); // increment count, update state by 1
      return;
    } else {
      return decrementSelectedHeaders(newSeqTrackerObj);
    }
  }

  function handleCloseClick(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    toggleDisable(true); // updates UI

    // was the header selected when disabled?
    if (!selected) return toggleSelection(false); // updates UI

    const newSeqTrackerObj = seqTrackerObj;
    decrementSelectedHeaders(newSeqTrackerObj);
  }

  return (
    <div className="setup-header-row">
      <span
        onClick={(ev) => handleHeaderClick(ev)}
        className={`${selected ? "setup-headers selected" : "setup-headers"} ${
          disable ? "setup-headers disable" : "setup-headers"
        }`}
      >
        <span
          className={`${
            selected ? "header-sequence-number-wrapper" : "removed"
          }`}
        >
          <h5 className="header-sequence-number">
            {seqTrackerObj[headerName] ? seqTrackerObj[headerName] : " "}
          </h5>
        </span>
        <span className="header-text">{headerName}</span>
      </span>
      <span
        onClick={(ev) => handleCloseClick(ev)}
        className={`${
          disable ? "header-x-container hidden" : "header-x-container"
        }`}
      >
        <div className="header-x-line header-x-line-left"></div>
        <div className="header-x-line header-x-line-right"></div>
      </span>
    </div>
  );
}

/*
 
both the sequence number and the close 'x' are absolutely positioned
 
*/
