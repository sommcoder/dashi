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
  /*
     
    -not active nor inactive. Needs initial user input to start header sequencing
     
    */

  // UI State:
  const [active, switchActivity] = useState();
  const [disable, toggleDisable] = useState();

  function handleHeaderClick() {
    console.log("START nextCount:", nextCount);
    if (disable && !active) {
      // onClick: not active and disabled = enabled!
      toggleDisable(false);
      return;
    }

    // console.log("ev.target.dataset:", ev.target.dataset);

    /*
     
    - Loop through headerArr and reduce each value in the trackerObj by 1 if the index + 1 that is deleted is GREATER than the value of the key's value in the TrackerObj
     
    */
    const newSeqTrackerObj = seqTrackerObj;

    if (!active) {
      switchActivity(true); // updates UI
      newSeqTrackerObj[headerName] = nextCount; // update curr header w. nextCount
      setSeqTrackerObj(newSeqTrackerObj); // update header trackerObj
      adjustCount(++nextCount); // increment count, update state by 1
      return;
    }

    if (active) {
      // already active, turns off active
      switchActivity(false); // updates UI
      const valueDeactivated = newSeqTrackerObj[headerName];
      newSeqTrackerObj[headerName] = 0; // set current header to 0
      // loop through all header keys, checking if their value is greater than the header value that was deactivated and reducing them by 1
      headerArr.forEach((header) => {
        console.log("newSeqTrackerObj[header]:", newSeqTrackerObj[header]);
        // each header that has a value > than, gets reduced by 1
        if (newSeqTrackerObj[header] > valueDeactivated) {
          --newSeqTrackerObj[header];
          adjustCount(--nextCount);
        }
        // adjustCount(--nextCount);
      });
      // reduce tally by 1. Can only ever reduce tally by 1
      adjustCount(nextCount--);
      // update with new Object:
      setSeqTrackerObj(newSeqTrackerObj);
    }
  }

  function handleCloseClick() {
    const newSeqTrackerObj = seqTrackerObj;

    if (disable) {
      toggleDisable(false);
      return;
    } else {
      toggleDisable(true);
      const valueDeactivated = newSeqTrackerObj[headerName];
      newSeqTrackerObj[headerName] = 0; // set current header to 0
      // loop through all header keys, checking if their value is greater than the header value that was deactivated and reducing them by 1
      headerArr.forEach((header) => {
        console.log("newSeqTrackerObj[header]:", newSeqTrackerObj[header]);
        if (newSeqTrackerObj[header] > valueDeactivated) {
          --newSeqTrackerObj[header];
        }
      });
    }
  }

  console.log("seqTrackerObj:", seqTrackerObj);
  console.log("seqTrackerObj[headerName] :", seqTrackerObj[headerName]);
  console.log("nextCount:", nextCount);

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
        <span className="header-sequence-number">
          {seqTrackerObj[headerName] ? seqTrackerObj[headerName] + 1 : ""}
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
