﻿import "./NavItemList.css";
import { useState } from "react";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

// menu, submenus, their paths and icon components:
import { navMenuList } from "../menu.js";

export default function NavItemList() {
  console.log("navMenuList:", navMenuList);

  // Update if Menu item requires accordian menu functionality
  const [navBarObj, adjustNavBar] = useState({
    Sales: false,
    Product: false,
    Expenses: false,
    Ordering: false,
  });

  // the number of menu rows:
  // submenus are generated on the NavMenuItem
  const menuRows = {
    gridTemplateRows: `repeat(${navMenuList.length}, auto`,
  };

  // console.log("menuRows:", menuRows);

  return (
    <div className="nav-side-bar-list" style={menuRows}>
      {navMenuList.map(({ menu, subMenus, menuIcon }, i) => (
        <NavMenuItem
          navBarObj={navBarObj}
          adjustNavBar={adjustNavBar}
          menu={menu}
          subMenus={subMenus}
          key={i}
          menuIcon={menuIcon}
        />
      ))}
    </div>
  );
}
