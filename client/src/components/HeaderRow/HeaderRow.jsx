import "./HeaderRow.css";
import RowCell from "../RowCell/RowCell";

export default function HeaderRow({ headers }) {
  return (
    <div
      className="table-header-row"
      style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
    >
      {headers.map((val, i, arr) => (
        <RowCell key={i} value={val} />
      ))}
    </div>
  );
}
