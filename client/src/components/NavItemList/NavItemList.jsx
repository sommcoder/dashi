import "./NavItemList.css";

import { Link } from "react-router-dom";

export default function NavItemList() {
  const navItems = [
    { label: "Sales", path: "/sales" },
    { label: "Products", path: "/products" },
    { label: "Purchasing", path: "/purchasing" },
    { label: "Setup", path: "/setup" },
  ];

  return (
    <ul className="nav-side-bar-list">
      {navItems.map(({ label, path }, i) => (
        <li key={i} className="nav-side-bar-item">
          <Link to={path} className="link-label" key={i}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
