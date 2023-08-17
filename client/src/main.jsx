// React:
import React from "react";
import ReactDOM from "react-dom/client";

// Src:
import App from "./App.jsx";
import ErrorPage from "./pages/error-page/error-page.jsx";

// React Router:
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
