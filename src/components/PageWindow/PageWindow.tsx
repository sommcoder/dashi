import styled from "styled-components";
import Table from "../Table/Table";
import NavBar from "../NavBar/NavBar";

export default function PageWindow() {
  return (
    <StyledPageWindow>
      <NavBar />
      <Table />
    </StyledPageWindow>
  );
}
const StyledPageWindow = styled.div``;
