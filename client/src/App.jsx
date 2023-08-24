// src:
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import NavSideBarMenu from "./components/NavSideBarMenu/NavSideBarMenu.jsx";
import RouteLoader from "./components/RouteLoader/RouteLoader";

import "./App.css";

// react
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
          <Route
            index
            path="/"
            element={<Dashboard />}
            lazy={() => <RouteLoader />}
          />
          <Route path="/sales" element={<div>sales!</div>} />
          <Route path="/products" element={<div>products!</div>} />
          <Route path="/purchasing" element={<div>purchasing!</div>} />
          <Route path="/setup" element={<DropZone />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
