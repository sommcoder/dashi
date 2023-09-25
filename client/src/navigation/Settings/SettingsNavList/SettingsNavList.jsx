import "./SettingsNavList.css";
import { settingsNavMenuList } from "../settings-menu";
import { Link } from "react-router-dom";

export default function SettingsNavList() {
  return (
    <ul>
      {settingsNavMenuList.map(({ menu, path }, i) => (
        <Link className="" to={path} key={i}>
          {menu}
        </Link>
      ))}
    </ul>
  );
}
