import "./SettingsHeader.css";
import { GoGrabber } from "../../../node_modules/react-icons/go";
import { TbArrowsDiagonalMinimize2 } from "../../../node_modules/react-icons/tb";

export default function SettingsHeader({ setTableDisplay, tableDisplay }) {
  function displayTable(ev) {
    ev.preventDefault();
    tableDisplay ? setTableDisplay(false) : setTableDisplay(true);
  }

  return (
    <div className="table-settings-header">
      <GoGrabber id="table-header-grab-icon" />
      <div></div>
      <TbArrowsDiagonalMinimize2
        onClick={displayTable}
        id="table-header-minimize-icon"
      />
    </div>
  );
}
