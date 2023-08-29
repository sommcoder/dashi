import { useState } from "react";
import "./UploadRow.css";

export default function UploadRow({
  headerName,
  seqTrackerObj,
  setSeqTrackerObj,
  adjustTally,
  currTally,
}) {
  /*
     
    -not active nor inactive. Needs initial user input to start header sequencing
     
    */

  const [active, switchActivity] = useState();
  const [disable, toggleDisable] = useState();

  function handleHeaderClick() {
    // console.log("ev.target.dataset:", ev.target.dataset);

    /*
     
    - Loop through headerArr and reduce each value in the trackerObj by 1 if the index + 1 that is deleted is GREATER than the value of the key's value in the TrackerObj
     
    */

    if (active) {
      // already active, turns off active
      switchActivity(false);

      return;
    } else {
      if (disable) {
        toggleDisable(false);
        return;
      }
      switchActivity(true);
    }
  }

  function handleCloseClick() {
    if (disable) {
      toggleDisable(false);
      return;
    } else {
      toggleDisable(true);
    }
  }

  /*
 onClick:
1) push header to sequence up to UploadHeader
2) 
 
*/

  // with this we have to look up the value:

  return (
    <div className="setup-header-row">
      <span
        onClick={(ev) => handleHeaderClick(ev)}
        className={`${active ? "setup-headers selected" : "setup-headers"} ${
          disable ? "setup-headers disable" : "setup-headers"
        }`}
      >
        <span className="header-sequence-number">{order ? order + 1 : ""}</span>
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
