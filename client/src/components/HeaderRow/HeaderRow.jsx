import { Fragment } from "react";
import "./HeaderRow.css";
import RowCell from "../RowCell/RowCell";
import ResizeBar from "../ResizeBar/ResizeBar";

export default function HeaderRow({
  colSizingSeq,
  colStyleString,
  tableDisplay,
  adjustColSizingSeq,
  headers,
}) {
  /*
   
  the rowCells are generated in the headerRow based on the headers prop and repeat with a 20px space for the resize bar's container to fit. this is hard-coded
   
  */

  const minimizedStyle = {
    borderRadius: " 10px",
  };

  console.log("colStyleString:", colStyleString);

  return (
    <div
      className="table-header-row"
      style={{
        gridTemplateColumns: `${colStyleString}`,
        borderRadius: `${tableDisplay ? "" : "0 0 10px 10px"}`,
      }}
    >
      {headers.map((el, i) => (
        <Fragment key={`frag-${i}`}>
          <RowCell className="header-row-cell" key={`cell-${i}`} value={el} />
          <ResizeBar
            key={`bar-${i}`}
            data={i}
            adjustColSizingSeq={adjustColSizingSeq}
            colSizingSeq={colSizingSeq}
          />
        </Fragment>
      ))}
    </div>
  );
}
