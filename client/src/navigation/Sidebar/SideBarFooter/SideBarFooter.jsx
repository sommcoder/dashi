import "./SideBarFooter.css";
import CurrentVenue from "../CurrentVenue/CurrentVenue";

export default function SideBarFooter() {
  return (
    <footer className="footer-container">
      <CurrentVenue className="footer-element" />
    </footer>
  );
}
