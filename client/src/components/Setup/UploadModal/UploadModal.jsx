import "./UploadModal.css";

export default function UploadModal({ headers }) {
  /*
 
1) user drops a file
2) drop zone does client side validation
3) passes headers down to UploadModal
4) Upload modal renders and a bunch of bubble input fields appear, user clicks the ones they want to keep/extract/save for their template
 
*/

  return (
    <div className="setup-modal-overlay">
      {headers.map((header, i) => (
        <input key={i} value={header} />
      ))}
    </div>
  );
}
