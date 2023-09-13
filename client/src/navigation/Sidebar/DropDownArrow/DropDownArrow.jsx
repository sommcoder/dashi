import { useState } from "react";
import "./DropDownArrow.css";

export default function DropDownArrow({ navBarObj, menu }) {
  const [dropDown, toggleDropDown] = useState(false);
  //   function handleDropDown() {
  //     if (dropDown) toggleDropDown(false);
  //     else toggleDropDown(true);
  //   }

  return (
    <span
      onClick={() => (dropDown ? toggleDropDown(false) : toggleDropDown(true))}
      className={`side-menu-dropdown-icon-container ${
        navBarObj[menu] ? "rotate" : ""
      }`}
    >
      <span className="side-menu-dropdown-arrow top-arrow-line"></span>
      <span className="side-menu-dropdown-arrow bottom-arrow-line"></span>
    </span>
  );
}
