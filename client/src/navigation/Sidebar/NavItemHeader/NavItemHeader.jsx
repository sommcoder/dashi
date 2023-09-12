import DropDownArrow from "../DropDownArrow/DropDownArrow";
import "./NavItemHeader.css";

import { useState } from "react";

import { Link } from "react-router-dom";

export default function NavItemHeader({ menu, subMenus }) {
  console.log("subMenus:", subMenus);

  // accordian state:
  const [isOpen, toggleActive] = useState(false);

  /*
 
onClick : 
- Clicking on the MENU opens up the SUBMENU
- it also creates a row PER element in the subMenu array to the Grid container
 
*/
  const subMenuRows = {
    gridTemplateRows: `repeat(${subMenus.length}, 1fr)`,
  };

  console.log("subMenuRows:", subMenuRows);

  return (
    <li
      onClick={() => (isOpen ? toggleActive(false) : toggleActive(true))}
      className="nav-side-bar-menu-header-container"
    >
      <div className="nav-side-bar-menu-container menu-item">
        <h5 className="nav-side-bar-menu-text">{menu}</h5>
        <DropDownArrow />
      </div>
      <div className="nav-side-bar-submenu-container " style={subMenuRows}>
        {isOpen ? (
          subMenus.map(({ subMenu, path }, i) => (
            <Link to={path} className="link-label menu-item" key={i}>
              {subMenu}
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </li>
  );
}
