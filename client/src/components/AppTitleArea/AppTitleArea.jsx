﻿import "./AppTitleArea.css";
import DashiLogo from "../../assets/Dashi Logo.svg";

export default function AppNameLogo() {
  // onClick=() container should send user Home/Landing page

  return (
    <div className="app-title-container">
      <img className="app-logo" src={DashiLogo} />
      <h1 className="app-title">Dashi</h1>
      <h5 className="app-title-slogan">a product hub &</h5>
      <h5 className="app-title-slogan">sales dashboard</h5>
    </div>
  );
}