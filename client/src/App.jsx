import NavSideBarMenu from "./navigation/Sidebar/SideBar/SideBar";
import RouteWrapper from "./pages/RouteWrapper/RouteWrapper";

import "./App.css";

export default function App() {
  /*
NavSideBarMenu triggers the Route changes in the Route Wrapper
*/

  return (
    <div className="app-container">
      <NavSideBarMenu />
      <RouteWrapper />
    </div>
  );
}
