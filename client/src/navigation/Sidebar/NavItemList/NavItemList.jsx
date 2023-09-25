﻿import "./NavItemList.css";
import { useState } from "react";
import NavItemMenu from "../NavItemMenu/NavItemMenu";

// menu, submenus and their paths:
import { navMenuList } from "../menu.js";

export default function NavItemList() {
  console.log("navMenuList:", navMenuList);

  // need to add new line here if we add more Menus in the future:
  const [navBarObj, adjustNavBar] = useState({
    Sales: false,
    Items: false,
    Orders: false,
    Reports: false,
    Setup: false,
  });

  // the number of menu rows:
  // submenus are generated on the NavItemMenu
  const menuRows = {
    gridTemplateRows: `repeat(${navMenuList.length}, auto`,
  };

  console.log("menuRows:", menuRows);

  return (
    <div className="nav-side-bar-list" style={menuRows}>
      {navMenuList.map(({ menu, subMenus }, i) => (
        <NavItemMenu
          navBarObj={navBarObj}
          adjustNavBar={adjustNavBar}
          menu={menu}
          subMenus={subMenus}
          key={i}
        />
      ))}
    </div>
  );
}