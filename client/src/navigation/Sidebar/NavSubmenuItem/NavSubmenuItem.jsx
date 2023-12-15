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
}) {
  // console.log("subMenu:", subMenu);
  // console.log("navBarObj:", navBarObj);
  return (
    <div className={`submenu-item-row ${navBarObj[menu] ? "active" : ""}`}>
      <IconContext.Provider value={{ className: "nav-side-bar-icon" }}>
        {subMenuIcon && React.createElement(subMenuIcon)}
      </IconContext.Provider>
      <Link
        to={path}
        className={`link-label submenu-link ${navBarObj[menu] ? "active" : ""}`}
      >
        {subMenu}
      </Link>
    </div>
  );
}
