import "./MainWrapper.css";
// Pages:
import Dashboard from "../Dashboard/DashboardPage";
import SetupPage from "../Setup/SetupPage";

// components:
import HeaderBarMenu from "../../navigation/Header/HeaderBarMenu/HeaderBarMenu";
// react:
import { useState } from "react";
// react router:
import { Routes, Route } from "react-router-dom";

export default function MainWrapper() {
  /*
   
  - MainWrapper houses our ROUTES.
  - State is controlled here and is pushed up from the HeaderBarMenu and passed down to Routes.
  - HeaderBarMenu provides some consistent functionality across the Pages/Routes
   
  */
  return (
    <div className="main-wrapper">
      <HeaderBarMenu />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/sales" element={<div>sales!</div>} />
        <Route path="/items" element={<div>items!</div>} />
        <Route path="/orders" element={<div>Orders!</div>} />
        <Route path="/reports" element={<div>reports!</div>} />
        <Route path="/setup" element={<SetupPage />} />
      </Routes>
    </div>
  );
}
