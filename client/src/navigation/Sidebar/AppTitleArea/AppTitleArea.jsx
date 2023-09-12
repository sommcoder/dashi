import "./AppTitleArea.css";
import DashiLogo from "../../../assets/Dashi Logo.svg";

import { Link } from "react-router-dom";

export default function AppNameLogo() {
  // onClick=() container should send user Home/Landing page

  return (
    <div className="app-title-container">
      <Link id="link-logo" className="link-label" to="/">
        <img className="app-logo" src={DashiLogo} />
        <h1 className="app-title">Dashi</h1>
      </Link>
    </div>
  );
}
