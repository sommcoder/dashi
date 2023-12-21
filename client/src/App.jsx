import SideBar from "./navigation/Sidebar/SideBar/SideBar";
import RouteWrapper from "./pages/RouteWrapper/RouteWrapper";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  /*
SideBar triggers the Route changes in the Route Wrapper
1) user account authentication
2) account data is fetched
3) venue data is fetched based on the default venue. When venue is switched, previous venue data is cached and the new venue data is fetched. The cached venue will be updated if there are any mutations sent to the server.
*/

  // will have to tinker with this.
  // we don't want this to stretch the routewrapper page and therefore stretch the table component.... or do we???

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <SideBar />
        <RouteWrapper />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
