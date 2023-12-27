import { useEffect, useState } from "react";
import DropDownArrow from "../DropDownArrow/DropDownArrow";
import NavSubMenuItem from "../NavSubmenuItem/NavSubmenuItem";
import "./NavMenuItem.css";
import React from "react";
import { IconContext } from "react-icons";

export default function NavMenuItem({
  menu,
  subMenus,
  adjustNavBar,
  navBarObj,
  menuIcon,
  navState,
}) {
  function handleMenuClick(ev) {
    ev.preventDefault();
    let targetMenu = ev.currentTarget.dataset.menu;
    const newNavBarObj = navBarObj;
    if (newNavBarObj[targetMenu]) {
      newNavBarObj[targetMenu] = false;
    } else {
      newNavBarObj[targetMenu] = true;
      Object.keys(newNavBarObj).forEach((key) => {
        if (key === targetMenu) return;
        newNavBarObj[key] = false;
      });
    }
    // console.log("newNavBarObj:", newNavBarObj);
    adjustNavBar((navBarObj) => ({ ...navBarObj, newNavBarObj }));
  }

  /*
onClick : 
- Clicking on the MENU opens up the SUBMENU
- it also creates a row PER element in the subMenu array to the Grid container

- We should have the ACTIVE menu CLOSE BEFORE we OPEN up the new ACTIVE menu. This would look WAYYYY more clean!
*/

  // slice returns a growing slice of the array each time the interval

  const subMenuRows = {
    gridTemplateRows: `repeat(${subMenus.length}, auto)`,
  };

  return (
    <li className="nav-side-bar-menu-header-container">
      <div
        data-menu={menu}
        onClick={(ev) => handleMenuClick(ev)}
        className="nav-side-bar-menu-container menu-item"
      >
        <IconContext.Provider value={{ className: "nav-side-bar-icon" }}>
          {menuIcon && React.createElement(menuIcon)}
        </IconContext.Provider>
        <h5 className={"nav-side-bar-menu-text"}>{menu}</h5>
        <DropDownArrow navBarObj={navBarObj} menu={menu} />
      </div>
      <div
        className={`nav-side-bar-submenu-container ${
          navBarObj[menu] ? "menu-active" : "menu-inactive"
        }`}
        style={subMenuRows}
      >
        {subMenus.map(({ path, subMenu, subMenuIcon }, i) => {
          return (
            <NavSubMenuItem
              path={path}
              key={`${subMenu}-${i}`}
              subMenu={subMenu}
              menu={menu}
              navBarObj={navBarObj}
              subMenuIcon={subMenuIcon}
              navState={navState}
            />
          );
        })}
      </div>
    </li>
  );
}
