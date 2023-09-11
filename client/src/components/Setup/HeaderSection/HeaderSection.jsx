import { Fragment, useEffect, useState, useRef } from "react";
import "./HeaderSection.css";

import UploadRow from "../UploadRow/UploadRow";

export default function HeaderSection({ headerArr, headerSeqTracker }) {
  // Header State:
  // tracks which headers have which values:
  const [seqTrackerObj, setSeqTrackerObj] = useState(headerSeqTracker);

  // Count State:
  // know which number is NEXT if a new header is clicked
  const [nextCount, adjustCount] = useState(1);

  /*
1) user drops a file
2) drop zone does client side validation
3) passes headers down to UploadModal
4) Upload modal renders and a bunch of bubble input fields appear, user clicks the ones they want to keep/extract/save for their template

** looking to make the experience easy. Maybe its a modal window that can be scrolled down if needed because there could be MANY headers in a single CSV. Maybe we should say the max is 50.

** should probably be a search option too. User will often already KNOW which ones they want to save to the template and therefore can just search...
 

*** OR can we just make this a drop down with MULTI SELECT functionality

*/

  // ref is for storing information between re-render
  // information is LOCAL to each copy of your component
  // const ref = useRef();

  // apply staggered rendering to header elements:
  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     adjustHeaders(headers);
  //   }, 500);
  //   return () => clearTimeout(delay);
  // }, [headerState]);

  return (
    <div className="setup-header-container">
      <h5>File Name</h5>
      {headerArr.map((headerName, i) => (
        <UploadRow
          key={i}
          headerName={headerName}
          headerArr={headerArr}
          seqTrackerObj={seqTrackerObj}
          setSeqTrackerObj={setSeqTrackerObj}
          nextCount={nextCount}
          adjustCount={adjustCount}
        />
      ))}
    </div>
  );
}
