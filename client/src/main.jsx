// react:
import React from "react";
import ReactDOM from "react-dom/client";
// src:
import App from "./App.jsx";
// import ErrorPage from "./pages/error-page/error-page.jsx";

// Should be an initial user validation/authentication check here.
// This would then be cached in the users browser for faster load times.

// react router:
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
