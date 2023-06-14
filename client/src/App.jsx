import Dashboard from "./components/Dashboard/Dashboard.jsx";
import DropZone from "./components/DropZone/DropZone.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <DropZone />
      <Dashboard />
    </div>
  );
}
