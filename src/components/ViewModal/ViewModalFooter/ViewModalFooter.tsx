import styled from "styled-components";
import {} from "styled-components/cssprop";

import ViewHideAllBtn from "../ViewHideAllBtn/ViewHideAllBtn";
import ViewShowAllBtn from "../ViewShowAllBtn/ViewShowAllBtn";

export default function ViewModalFooter() {
  return (
    <StyledViewModalFooter>
      <ViewHideAllBtn />
      <ViewShowAllBtn />
    </StyledViewModalFooter>
  );
}
const StyledViewModalFooter = styled.div``;
