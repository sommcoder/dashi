// React:
import React from "react";
import ReactDOM from "react-dom/client";

// Src:
import App from "./App.jsx";
// import ErrorPage from "./pages/error-page/error-page.jsx";

// React Router:
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
