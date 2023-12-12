import { useEffect, useState } from "react";
import DropDownArrow from "../DropDownArrow/DropDownArrow";
import NavItemSubMenu from "../NavSubmenuItem/NavSubmenuItem";
import "./NavMenuItem.css";

export default function NavMenuItem({
  menu,
  subMenus,
  adjustNavBar,
  navBarObj,
}) {
  function handleMenuClick(ev) {
    ev.preventDefault();
    // ev.stopPropagation();
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
  const subMenuRows = {
    gridTemplateRows: `repeat(${subMenus.length}, auto)`,
  };

  // Handle subMenu render animation logic
  // revisit this in the future.. not working as desired
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = count;
    const interval = setInterval(() => {
      if (counter >= subMenus.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
        counter++; // local variable that this closure will see
      }
    }, 500);
    return () => clearInterval(interval);
  }, [subMenus]);

  // slice returns a growing slice of the array each time the interval processes
  let subMenuList = subMenus.slice(0, count).map(({ path, subMenu }, i) => {
    return (
      <NavItemSubMenu
        path={path}
        key={`${subMenu}-${i}`}
        subMenu={subMenu}
        menu={menu}
        navBarObj={navBarObj}
      />
    );
  });

  return (
    <li className="nav-side-bar-menu-header-container">
      <div
        data-menu={menu}
        onClick={(ev) => handleMenuClick(ev)}
        className="nav-side-bar-menu-container menu-item"
      >
        <h5 className="nav-side-bar-menu-text">{menu}</h5>
        <DropDownArrow navBarObj={navBarObj} menu={menu} />
      </div>
      <div
        className={`nav-side-bar-submenu-container ${
          navBarObj[menu] ? "active" : ""
        }`}
        style={subMenuRows}
      >
        {subMenuList}
      </div>
    </li>
  );
}
