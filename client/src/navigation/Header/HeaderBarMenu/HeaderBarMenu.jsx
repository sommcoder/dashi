﻿import "./HeaderBarMenu.css";
import HeaderBarItems from "../HeaderBarItems/HeaderBarItems";

export default function HeaderBarMenu() {
  /*
     
    the header bar menu will have import continuous features such as a SAVE button to save the page
     
    */
  return (
    <div className="header-bar-menu-container">
      <HeaderBarItems />
    </div>
  );
}
