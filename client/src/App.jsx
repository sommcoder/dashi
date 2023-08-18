import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import "./App.css";

import { ReactQueryDevtools } from "react-query/devtools";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="app-container">
        <DropZone />
        <Dashboard />
      </div>
    </QueryClientProvider>
  );
}
