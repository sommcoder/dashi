import "./FileTally.css";

export default function FileTally({ fileCount }) {
  /*
only render when a file has been submitted
*/

  return <h5>{fileCount} files submitted</h5>;
}
