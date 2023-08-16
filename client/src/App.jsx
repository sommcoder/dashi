import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import "./App.css";

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
