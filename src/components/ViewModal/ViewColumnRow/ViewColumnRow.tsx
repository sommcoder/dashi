import styled from "styled-components";
import {} from "styled-components/cssprop";
import ViewRowDragDrop from "../ViewRowDragDrop/ViewRowDragDrop";
import ViewRowSelectBox from "../ViewRowSelectBox/ViewRowSelectBox";

export default function ViewColumnRow() {
  return (
    <StyledViewColumnRow>
      <ViewRowDragDrop />
      <ViewRowSelectBox />
    </StyledViewColumnRow>
  );
}
const StyledViewColumnRow = styled.div``;
