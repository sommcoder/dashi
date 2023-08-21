import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import NavSideBar from "./components/NavSideBar/NavSideBar.jsx";

import "./App.css";

import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="app-container">
        <NavSideBar />
        {/* <DropZone /> 
        // We should move DropZone to a new page so user can load data elsewhere
        */}
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}
