import styled from "styled-components";
import {} from "styled-components/cssprop";

import ViewColumnBtn from "../ViewColumnBtn/ViewColumnBtn";
import ViewSortBtn from "../ViewSortBtn/ViewSortBtn";
import ViewGroupBtn from "../ViewGroupBtn/ViewGroupBtn";
import ViewFilterBtn from "../ViewFilterBtn/ViewFilterBtn";

export default function ViewModalNavBar() {
  return (
    <StyledViewModalNavBar>
      <ViewColumnBtn />
      <ViewSortBtn />
      <ViewGroupBtn />
      <ViewFilterBtn />
    </StyledViewModalNavBar>
  );
}
const StyledViewModalNavBar = styled.div``;
