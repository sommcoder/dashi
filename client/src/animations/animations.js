export function sideBarAdjust(ref) {
  const maximizeSidebar = {};
  /*
     
    What's the goal of this?

    

    

    onMouseEnter:
    1) Increase width, icons remain where they are
    2) Full width is reached
    3) Fade text and dropdown arrow in via the opacity property
    
    onMouseLeave:
    - we want the text/link-labels to gradually become hidden
    - then we center the submenu rows
    - at the same time we can turn the opacity of the text/link-labels to 0
    


    Why isn't this currently happening? It's because grid-template- cannot be animated smoothly. the changes are abrupt.

    We must use width to our advantage here!

    1) we can use the DELAY of the second
     
    */
  const styleObj = {
    sidebar: {
      width: "150px",
      transition: "width 250ms linear",
    },
    menu: {},
  };

  return;
}
