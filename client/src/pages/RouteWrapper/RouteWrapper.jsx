import "./RouteWrapper.css";
import * as Page from "../index.js";
import HeaderBarMenu from "../../navigation/Header/HeaderBarMenu/HeaderBarMenu.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

export default function RouteWrapper() {
  /*
  - State is controlled here and can be pushed up from the HeaderBarMenu and passed down to Routes.
  - HeaderBarMenu provides some consistent functionality across the Page/Routes
  */
  return (
    <div className="route-wrapper">
      <HeaderBarMenu />
      {/* 
- One big initial fetch/load.
- Navigation would be immediately sent to client regardless of the URL visited.
- Each table would have a corresponding "loading component" to indicate progress of the fetch to the user.

      */}
      <Routes>
        <Route index path="/" element={<Page.Dashboard />} />
        <Route path="/sales" element={<Page.Sales />} />
        <Route path="/items" element={<Page.Items />} />
        <Route path="/families" element={<Page.Families />} />
        <Route path="/vendors" element={<Page.Vendors />} />
        <Route path="/inventories" element={<Page.Inventories />} />
        <Route path="/areas" element={<Page.Areas />} />
        <Route path="/depletions" element={<Page.Depletions />} />
        <Route path="/transfers" element={<Page.Transfers />} />
        <Route path="/orders" element={<Page.Orders />} />
        <Route path="/invoices" element={<Page.Invoices />} />
        <Route path="/reports" element={<Page.Reports />} />
        <Route path="/setup" element={<Page.Setup />} />
      </Routes>
    </div>
  );
}
