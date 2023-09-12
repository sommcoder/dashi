import "./TableTitle.css";

export default function TableTitle({ tableName }) {
  return (
    <>
      {tableName ? (
        <h4 className="table-title">${tableName}</h4>
      ) : (
        <input className="table-title table-title-input" />
      )}
    </>
  );
}
