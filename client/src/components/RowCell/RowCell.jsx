import "./RowCell.css";

export default function RowCell({ value }) {
  return (
    <span className="row-cell-container">
      <div className="row-cell-content">{value}</div>
    </span>
  );
}
