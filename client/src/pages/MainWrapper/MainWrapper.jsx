import "./MainWrapper.css";
//////////////////////////////////////////////////////////////////
// Main:
import Dashboard from "../Dashboard/DashboardPage";
// Sales:
import Sales from "../Sales/Sales";
// Items:
import Items from "../Items/Items";
import Families from "../Families/Families";
import Vendors from "../Vendors/Vendors";
// Inventories:
import Inventories from "../Inventories/Inventories";
import Areas from "../Areas/Areas";
import Transfers from "../Transfers/Transfers";
import Depletions from "../Depletions/Depletions";
// Orders:
import Orders from "../Orders/Orders";
import Invoices from "../Invoices/Invoices";
// Reports:
import Reports from "../Reports/Reports";
// Setup:
import Setup from "../Setup/SetupPage";
//////////////////////////////////////////////////////////////////
// components:
import HeaderBarMenu from "../../navigation/Header/HeaderBarMenu/HeaderBarMenu";
// react:
import { useState } from "react";
// react router:
import { Routes, Route } from "react-router-dom";

export default function MainWrapper() {
  /*
  - MainWrapper houses our ROUTES.
  - State is controlled here and can be pushed up from the HeaderBarMenu and passed down to Routes.
  - HeaderBarMenu provides some consistent functionality across the Pages/Routes
  */
  return (
    <div className="main-wrapper">
      <HeaderBarMenu />
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/items" element={<Items />} />
        <Route path="/families" element={<Families />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/inventories" element={<Inventories />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/depletions" element={<Depletions />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </div>
  );
}
