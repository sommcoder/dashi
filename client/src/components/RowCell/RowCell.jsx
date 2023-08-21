import "./RowCell.css";

export default function RowCell({ value }) {
  return <input className="row-cell-content" value={value} />;
}
