import NavSideBarMenu from "./navigation/Sidebar/SideBar/SideBar";
import RouteWrapper from "./pages/RouteWrapper/RouteWrapper";

import "./App.css";

// import { GET_VENUE_DATA } from "../../gql/init-gql.js";

export default function App() {
  /*
NavSideBarMenu triggers the Route changes in the Route Wrapper


1) user account authentication
2) account data is fetched
3) venue data is fetched based on the default venue. When venue is switched, previous venue data is cached and the new venue data is fetched. The cached venue will be updated if there are any mutations sent to the server.

*/

  return (
    <div className="app-container">
      <NavSideBarMenu />
      <RouteWrapper />
    </div>
  );
}
