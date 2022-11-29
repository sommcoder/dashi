import styled from "styled-components";
import {} from "styled-components/cssprop";
import CreateBtn from "../CreateBtn/CreateBtn";
import SettingsBtn from "../SettingsBtn/SettingsBtn";
import ViewMenuBtn from "../ViewMenuBtn/ViewMenuBtn";

export default function NavBar() {
  return (
    <StyledNavBar>
      <ViewMenuBtn />
      <SettingsBtn />
      <CreateBtn />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.div``;
