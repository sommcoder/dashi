import * as file from "../../test/img/Bespoke - 23883.JPG";

import { createWorker } from "tesseract.js";

const worker = await createWorker({
  logger: (m) => console.log(m),
});

(async () => {
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(file);
  console.log(text);
  await worker.terminate();
})();
