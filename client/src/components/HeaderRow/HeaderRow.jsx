import "./HeaderRow.css";
import RowCell from "../RowCell/RowCell";
import ResizeBar from "../ResizeBar/ResizeBar";

export default function HeaderRow({ headers, tableDisplay }) {
  /*
   
  the rowCells are generated in the headerRow based on the headers prop and repeat with a 20px space for the resize bar's container to fit. this is hard-coded
   
  */
  const minimizedStyle = {
    borderRadius: " 10px",
  };

  return (
    <div
      className="table-header-row"
      style={{
        gridTemplateColumns: `repeat(${headers.length}, 1fr 20px)`,
        borderRadius: `${tableDisplay ? "" : "0 0 10px 10px"}`,
      }}
    >
      {headers.map((val, i) => (
        <>
          <RowCell className="header-row-cell" key={`cell-${i}`} value={val} />
          <ResizeBar key={`bar-${i}`} />
        </>
      ))}
    </div>
  );
}
