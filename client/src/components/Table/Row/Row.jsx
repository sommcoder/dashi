import "./Row.css";
import RowCell from "../RowCell/RowCell";
import RowCellGap from "../RowCellGap/RowCellGap";
import RowCellCheckbox from "../RowCellCheckbox/RowCellCheckbox";

import { Fragment, useEffect, useState } from "react";

export default function Row({ data, colStyleString, tableDisplay }) {
  const [show, setShow] = useState(false);
  const delay = 1;

  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  });

  /*
   
  Ultimately, we want a string or array of the sizes of each header element and their size in rems to 
  `repeat(${colSizingSeq.length}, 1fr)` can be the default setup. However we're going to want to determine if there's been a columns adjustment and then generate header/column widths depending on that new state
   
  */

  // console.log("ROW: colStyleString:", colStyleString);
  // console.log("data:", data);

  return (
    <div
      className="table-row"
      style={{
        gridTemplateColumns: `${colStyleString}`,
        borderRadius: `${tableDisplay ? "" : "0 0 10px 10px"}`,
      }}
    >
      <RowCellCheckbox />
      {Object.keys(data).map((val, i) => {
        return show ? (
          <Fragment key={`frag-${i}`}>
            <RowCell key={`cell-${i}`} value={data[val]} />{" "}
            <RowCellGap key={`gap-${i}`} colStyleString={colStyleString} />
          </Fragment>
        ) : (
          ""
        );
      })}
    </div>
  );
}

/*
Row will need to accommodate the size of the resize bar that in the header. otherwise the columns may not line up properly
*/
