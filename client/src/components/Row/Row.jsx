import "./Row.css";
import RowCell from "../RowCell/RowCell";

export default function Row({ el, headers }) {
  const row = { gridTemplateColumns: `repeat(${headers.length}, 1fr)` };
  return (
    <div className="table-row" style={row}>
      {Object.keys(el).map((val, i) => (
        <RowCell key={i} value={el[val]} />
      ))}
    </div>
  );
}
