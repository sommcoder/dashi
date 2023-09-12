import "./NavItemList.css";

import NavItemHeader from "../NavItemHeader/NavItemHeader";
import { navMenuList } from "../menu.js";

export default function NavItemList() {
  console.log("navMenuList:", navMenuList);

  const menuRows = {
    gridTemplateRows: `repeat(${navMenuList.length}, 1fr)`,
  };

  console.log("menuRows:", menuRows);

  return (
    <div className="nav-side-bar-list" style={menuRows}>
      {navMenuList.map(({ menu, subMenus }, i) => (
        <NavItemHeader menu={menu} subMenus={subMenus} key={i} />
      ))}
    </div>
  );
}
