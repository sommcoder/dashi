import "./NavSubmenuItem.css";

import { Link } from "react-router-dom";
import React from "react";
import { IconContext } from "react-icons";

export default function NavSubmenuItem({
  path,
  subMenu,
  navBarObj,
  menu,
  subMenuIcon,
  navState,
}) {
  /*
 
This is an individual submenu item
 
*/

  const sidebarOpen = {
    gridTemplateColumns: "15% 20% 65%",
    // minWidth: "130px" /* this worked. Seems wrong though */,
  };
  // will have to tinker with this.
  // we don't want this to stretch the routewrapper page and therefore stretch the table component.... or do we???
  const sidebarClosed = {
    gridTemplateColumns: "1fr",
    paddingLeft: "0rem",
  };

  return (
    <div
      className={`submenu-item-row ${
        navBarObj[menu] ? "submenu-active" : "submenu-inactive"
      }`}
      style={navState ? sidebarOpen : sidebarClosed}
    >
      <div></div>
      <IconContext.Provider value={{ className: "nav-side-bar-icon" }}>
        {subMenuIcon && React.createElement(subMenuIcon)}
      </IconContext.Provider>
      {navState ? (
        <Link to={path} className={`link-label submenu-link`}>
          {subMenu}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
