import DropDownArrow from "../DropDownArrow/DropDownArrow";
import NavItemSubMenu from "../NavItemSubMenu/NavItemSubMenu";
import "./NavItemMenu.css";

export default function NavItemMenu({
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
    console.log("newNavBarObj:", newNavBarObj);
    adjustNavBar((navBarObj) => ({ ...navBarObj, newNavBarObj }));
  }

  /*
onClick : 
- Clicking on the MENU opens up the SUBMENU
- it also creates a row PER element in the subMenu array to the Grid container
*/
  const subMenuRows = {
    gridTemplateRows: `repeat(${subMenus.length}, auto)`,
  };

  console.log("subMenuRows:", subMenuRows);
  console.log("navBarObj[menu]:", navBarObj);

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
        {subMenus.map(({ subMenu, path }, i) => (
          <NavItemSubMenu
            path={path}
            key={i}
            subMenu={subMenu}
            menu={menu}
            navBarObj={navBarObj}
          />
        ))}
      </div>
    </li>
  );
}
