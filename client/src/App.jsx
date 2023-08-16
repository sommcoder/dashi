import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <DropZone />
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}
