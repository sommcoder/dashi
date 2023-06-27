import "./Row.css";
import RowCell from "../RowCell/RowCell";

export default function Row({ el, headers }) {
  const col = { gridTemplateColumns: `repeat(${headers.length}, 1fr)` };
  return (
    <div className="table-row" style={col}>
      {Object.keys(el).map((val, i) => (
        <RowCell key={i} value={el[val]} />
      ))}
    </div>
  );
}

/*
 
Row will need to accommodate the size of the resize bar that are in the header. otherwise the columns may not line up properly
 
*/
