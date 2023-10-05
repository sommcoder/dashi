import NavSideBarMenu from './navigation/Sidebar/SideBar/SideBar';
import MainWrapper from './pages/MainWrapper/MainWrapper';

import './App.css';

export default function App() {
  /*
 
NavSideBarMenu triggers the Route changes
 
*/

  return (
    <div className="app-container">
      <NavSideBarMenu />
      <MainWrapper />
    </div>
  );
}
