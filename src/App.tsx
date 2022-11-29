import {} from "styled-components/cssprop";
import styled from "styled-components";

import Table from "./components/Table/Table";
import NavBar from "./components/NavBar/NavBar";
import PageWindow from "./components/PageWindow/PageWindow";

export default function App() {
  return (
    <div className="App">
      <PageWindow>
        <NavBar />
        <Table />
      </PageWindow>
    </div>
  );
}
