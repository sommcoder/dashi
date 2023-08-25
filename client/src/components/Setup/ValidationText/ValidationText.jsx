import "./ValidationText.css";

export default function ValidationText() {
  const MESSAGES = {
    error: (file) => `file: "${file}" is invalid`,
  };
  return (
    <div>
      <h5>file is valid</h5>
    </div>
  );
}
