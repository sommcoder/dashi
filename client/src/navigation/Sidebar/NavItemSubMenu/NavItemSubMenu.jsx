import "./NavItemSubMenu.css";

import { Link } from "react-router-dom";

export default function NavItemSubMenu({ path, subMenu, navBarObj, menu }) {
  console.log("navBarObj:", navBarObj);
  return (
    <div className="submenu-item-row">
      <Link
        to={path}
        className={`link-label submenu-link ${navBarObj[menu] ? "active" : ""}`}
      >
        {subMenu}
      </Link>
    </div>
  );
}
