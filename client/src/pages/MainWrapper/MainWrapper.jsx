import "./MainWrapper.css";
// Pages:
import Dashboard from "../Dashboard/DashboardPage";
import Setup from "../Setup/SetupPage";
import Families from "../Families/Families";
import Invoices from "../Invoices/Invoices";
import Items from "../Items/Items";
import PurchaseOrders from "../PurchaseOrders/PurchaseOrders";
import Reports from "../Reports/Reports";
import Requisitions from "../Requisitions/Requisitions";
import Sales from "../Sales/Sales";
import Vendors from "../Vendors/Vendors";

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
        <Route path="/sales" element={<Sales />} />
        <Route path="/items" element={<Items />} />
        <Route path="/families" element={<Families />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/requisitions" element={<Requisitions />} />
        <Route path="/purchase-orders" element={<PurchaseOrders />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </div>
  );
}
