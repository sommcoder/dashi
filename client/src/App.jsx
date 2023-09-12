// Menu:
import NavSideBarMenu from "./navigation/Sidebar/NavSideBarMenu/NavSideBarMenu";
import MainWrapper from "./pages/MainWrap per/MainWrapper";

import "./App.css";

// react query:
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function App() {
  /*
 
NavSideBarMenu triggers the Route changes
 
*/

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="app-container">
        <NavSideBarMenu />
        <MainWrapper />
      </div>
    </QueryClientProvider>
  );
}
