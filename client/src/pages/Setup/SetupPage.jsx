import "./SetupPage.css";
import { useState } from "react";

import HeaderBarMenu from "./components/HeaderBarMenu/HeaderBarMenu";

import DropZone from "../../components/Setup/DropZone/DropZone";
import HeaderSection from "../../components/Setup/HeaderSection/HeaderSection";
import Table from "../../components/Dashboard/Table/Table";

export default function SetupPage() {
  // this is a placeholder that we parse from the csv submitted:
  const headerArr = ["title", "label", "price", "location", "store", "venue"];
  const headerSeqTracker = {};
  headerArr.forEach((header) => (headerSeqTracker[header] = 0));
  console.log("headerSeqTracker:", headerSeqTracker);

  const [upload, setUpload] = useState(false);
  const [headers, setHeaders] = useState(headerArr);

  // client side validation could happen HERE
  /*
   
  - Data gets passed UP from DropZone
  - State gets passed DOWN to HeaderSection
  - Initial names are gathered
   
  */

  return (
    <div className="setup-page-container">
      <HeaderBarMenu />
      <DropZone setHeaders={setHeaders} />
      <HeaderSection
        headerArr={headerArr}
        headerSeqTracker={headerSeqTracker}
      />
      <Table />
    </div>
  );
}
