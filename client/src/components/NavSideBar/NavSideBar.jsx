import AppNameLogo from "../AppNameLogo/AppNameLogo";

import "./NavSideBar.css";

export default function NavSideBar() {
  return (
    <nav className="nav-side-bar-container">
      <AppNameLogo />
      <ul className="nav-side-bar-list">
        <li className="nav-side-bar-items">Sales</li>
        <li className="nav-side-bar-items">Inventory</li>
        <li className="nav-side-bar-items">Purchasing</li>
      </ul>
    </nav>
  );
}
