import styled from "styled-components";
import {} from "styled-components/cssprop";
import Row from "../Row/Row";
import Header from "../Header/Header";
import ViewMenuModal from "../ViewModal/ViewMenuModal/ViewMenuModal";

export default function Table() {
  /*
     
    viewMenuModal component will be hidden by default and opened when the ViewMenuBtn is clicked
     
    */
  return (
    <StyledTable>
      <ViewMenuModal />
      <Header />
      <Row />
    </StyledTable>
  );
}
const StyledTable = styled.table``;
