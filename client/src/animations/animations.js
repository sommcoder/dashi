export function sideBarAdjust() {
  /*
     
    What's the goal of this?

    - sidebar should overflow-x: hidden

    onMouseEnter:
    - we want the text/link-labels to gradually become hidden
    - then we center the submenu rows
    - at the same time we can turn the opacity of the text/link-labels to 0

    onMouseLeave:
    - start increasing the width of the sideBar component
    - start increasing the opacity of the text/link-labels to 1
    - allow the submenu rows to gradually lengthen


    Why isn't this currently happening? It's because grid-template- cannot be animated smoothly. the changes are abrupt.

    We must use width to our advantage here!



    1) 
     
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
