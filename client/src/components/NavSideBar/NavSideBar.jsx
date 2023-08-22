import AppTitleArea from "../AppTitleArea/AppTitleArea";
import NavItemList from "../NavItemList/NavItemList";
import SideNavBarFooter from "../SideNavBarFooter/SideNavBarFooter";

import "./NavSideBar.css";

export default function NavSideBar() {
  return (
    <nav className="nav-side-bar-container">
      <AppTitleArea />
      <NavItemList />
      <SideNavBarFooter />
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
