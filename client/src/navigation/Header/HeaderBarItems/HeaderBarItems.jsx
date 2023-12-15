import "./HeaderBarItems.css";
import { IconContext } from "react-icons";
import { RiMailSendLine } from "react-icons/ri";

export default function HeaderBarItems() {
  /*
   
  - The send button should be a really FUN button to push or eventually, SWIPE on mobile
   
  */
  return (
    <div className="header-bar-item-list-container">
      <button className="header-send-btn">
        <IconContext.Provider value={{ className: "header-send-btn-icon" }}>
          <RiMailSendLine />
        </IconContext.Provider>
      </button>
    </div>
  );
}
