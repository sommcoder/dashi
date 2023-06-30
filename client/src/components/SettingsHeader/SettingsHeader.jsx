import "./SettingsHeader.css";
import TableTitle from "../TableTitle/TableTitle";
import { GoGrabber } from "../../../node_modules/react-icons/go";
import { TbArrowsDiagonalMinimize2 } from "../../../node_modules/react-icons/tb";
import { TbMaximize } from "../../../node_modules/react-icons/tb";

export default function SettingsHeader({ setTableDisplay, tableDisplay }) {
  function displayTable(ev) {
    ev.preventDefault();
    tableDisplay ? setTableDisplay(false) : setTableDisplay(true);
  }

  return (
    <div className="table-settings-header">
      <GoGrabber id="table-header-grab-icon" />
      <TableTitle />
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
