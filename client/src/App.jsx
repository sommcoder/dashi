// Pages:
import Dashboard from "./pages/Dashboard/DashboardPage.jsx";
import SetupPage from "./pages/Setup/SetupPage.jsx";
// Menu:
import NavSideBarMenu from "./components/SidebarMenu/NavSideBarMenu/NavSideBarMenu.jsx";
import "./App.css";
// react:
import { useState } from "react";
// react router:
import { Routes, Route } from "react-router-dom";
// react query:
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="app-container">
        <NavSideBarMenu />
        <Routes>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/sales" element={<div>sales!</div>} />
          <Route path="/products" element={<div>products!</div>} />
          <Route path="/purchasing" element={<div>purchasing!</div>} />
          <Route path="/setup" element={<SetupPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
