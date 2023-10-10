import Tesseract from "tesseract.js";

export const recognize = async ({ target: { files } }) => {
  // create a URL object once user drag and drops file
  document.getElementById("imgInput").src = URL.createObjectURL(files[0]);

  // create the tesseract worker
  const worker = await Tesseract.createWorker("eng", 1, {
    // corePath: '/tesseract-core-simd.wasm.js',
    workerPath: "/dist/worker.min.js",
  });
  const ret = await worker.recognize(
    files[0],
    { rotateAuto: true },
    { imageColor: true, imageGrey: true, imageBinary: true }
  );
  document.getElementById("imgOriginal").src = ret.data.imageColor;
  document.getElementById("imgGrey").src = ret.data.imageGrey;
  document.getElementById("imgBinary").src = ret.data.imageBinary;
};
const elm = document.getElementById("uploader");
elm.addEventListener("change", recognize);
