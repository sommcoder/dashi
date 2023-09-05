import "./SettingsHeader.css";
import TableTitle from "../TableTitle/TableTitle";
import { GoGrabber } from "react-icons/go";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { TbMaximize } from "react-icons/tb";

export default function SettingsHeader({
  setTableDisplay,
  tableDisplay,
  tableName,
  tableType,
}) {
  function displayTable(ev) {
    ev.preventDefault();
    tableDisplay ? setTableDisplay(false) : setTableDisplay(true);
  }

  /*
   
  1) table grabber should only be present/grabbable if Tabletype === 'dashboard'. All other instances of 
  2) tables should only be grabbable 
  3) if tableType === 'setup' an input field is present so user can name the table 
  4) user is required to assign the table to a CATEGORY (ie. products, sales, purchasing)
   
  */

  return (
    <div className="table-settings-header">
      <GoGrabber id="table-header-grab-icon" />
      <TableTitle tableName={tableName} />
      {tableDisplay ? (
        <TbArrowsDiagonalMinimize2
          onClick={displayTable}
          className="table-header-icon"
          id="table-header-minimize-icon"
        />
      ) : (
        <TbMaximize
          onClick={displayTable}
          className="table-header-icon"
          id="table-header-maximize-icon"
        />
      )}
    </div>
  );
}
