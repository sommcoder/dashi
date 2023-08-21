import "./ResizeBar.css";

export default function ResizeBar({ colSizingSeq, adjustColSizingSeq, data }) {
  function handleDrag(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("ev:", ev);
    console.log("ev.target.dataset.seq:", ev.target.dataset.seq);
    // now we've identified which bar/element in the seq Array has been adjusted therefore we can now determine how to adjust our table.

    // maybe this function recalculates

    /*
     
    - if bar goes left, element -1 of curr element needs to SHRINK.
    - if bar goes right, element +1 of curr element needs to SHRINK.
    - The limit of growth will be when the resizeBarContainer touches the container of the header title
     
    */
  }

  function handleDragStart(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    // console.log("ev.index:", ev.index);
  }

  function handleColAdjust(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    console.log("ev:", ev);
    console.log("ev.target.dataset.seq:", ev.target.dataset.seq);
    // we know which one has moved, BUT we of course don't know by how much. Default is 3 rem for everything, so we know where we started.

    // We need: The total length of the row including resize components which should NEVER change size.
    adjustColSizingSeq();
  }

  /*
   
  Ultimately, we need to determine WHICH element in the array was adjusted/resized. Push that state change up to the Table component and rerender? This will become a very expensive operation that will need to be optimized later with memo's or other optimization techniques!

  Maybe we JUST adjust the state onDragEnd. onDrag will simply adjust the header?? Maybe not, cause the point of one dragging a resize bar would be to more clearly see something in the table's rows so it ought to adjust as you go.
   
  */

  return (
    <span
      className="table-header-resize-bar-container"
      // onDrag={(e) => handleDrag(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleColAdjust(e)}
      draggable={true}
      data-seq={data}
    >
      <span className="table-header-resize-bar-line">|</span>
    </span>
  );
}
