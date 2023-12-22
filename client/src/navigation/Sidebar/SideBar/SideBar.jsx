import AppTitleArea from "../AppTitleArea/AppTitleArea";
import NavItemList from "../NavItemList/NavItemList";
import SideBarFooter from "../SideBarFooter/SideBarFooter";

import { motion, useAnimate } from "framer-motion";

import { useState } from "react";

import "./SideBar.css";

export default function SideBar() {
  // will control the nav side bar menu.
  const [navState, setNavState] = useState(true);

  const [scope, animate] = useAnimate();

  function adjustSideBarView(ev) {
    ev.stopPropagation();
    navState ? setNavState(false) : setNavState(true);
  }

  return (
    <nav
      onMouseLeave={(ev) => adjustSideBarView(ev)}
      onMouseEnter={(ev) => adjustSideBarView(ev)}
      className={`nav-side-bar-container`}
    >
      <AppTitleArea navState={navState} />
      <NavItemList navState={navState} />
      <SideBarFooter navState={navState} />
    </nav>
  );
}

/*
 
Sales : 
- upload sales csv
- designated which headers you'd like to track
- set up guards to ensure CSV's are uploaded correctly

Products :
- upload inventory/product list csv from 1 or more sources
- declare the sources/inputs (inventory #1, Inventory #2, etc)
- assign the common/connected headers for them
- create output tables () the EXPORT to csv
 
*/
