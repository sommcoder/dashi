import "./SetupPage.css";
import { useState } from "react";

import DropZone from "../../components/Setup/DropZone/DropZone";
import UploadModal from "../../components/Setup/UploadModal/UploadModal";

export default function SetupPage() {
  const { upload, setUpload } = useState(false);

  return (
    <div>
      <DropZone />
      <UploadModal />
    </div>
  );
}
