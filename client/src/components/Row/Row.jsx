import "./Row.css";
import RowCell from "../RowCell/RowCell";
import { useEffect, useState } from "react";

export default function Row({ el, headers, tableDisplay }) {
  // const col = { gridTemplateColumns: `repeat(${headers.length}, 1fr)` };

  const [show, setShow] = useState(false);

  const delay = 1;
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  });

  return (
    <div
      className="table-row"
      style={{
        gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
        borderRadius: `${tableDisplay} ? "" : "0 0 10px 10px`,
      }}
    >
      {Object.keys(el).map((val, i) => {
        return show ? <RowCell key={i} value={el[val]} /> : "";
      })}
    </div>
  );
}

/*
 
Row will need to accommodate the size of the resize bar that in the header. otherwise the columns may not line up properly
 
*/
