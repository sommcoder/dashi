import PageWindow from "./components/PageWindow/PageWindow";

import { css } from "styled-components";
import React, { FC } from "react";

function App() {
  return (
    <StyledApp className="App">
      <PageWindow />
    </StyledApp>
  );
}

const StyledApp = css`
  border: 2px solid black;
`;

export default App;
