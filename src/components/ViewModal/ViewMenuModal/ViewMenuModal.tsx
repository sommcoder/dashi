import styled from "styled-components";

import ViewColumnRow from "../ViewColumnRow/ViewColumnRow";
import ViewModalNavBar from "../ViewModalNavBar/ViewModalNavBar";
import ViewModalFooter from "../ViewModalFooter/ViewModalFooter";

export default function ViewMenuModal() {
  /*
   
  ViewColumnRow components to be generated from a data list
   
  */
  return (
    <StyledViewMenuModal>
      <ViewModalNavBar />
      <ViewColumnRow />
      <ViewModalFooter />
    </StyledViewMenuModal>
  );
}
const StyledViewMenuModal = styled.div``;
