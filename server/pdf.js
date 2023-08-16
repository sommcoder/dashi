import { fs } from "node:fs";
import PDFParser from "pdf-parse";

/*
 
1) first handle client-side validation. Is the file a pdf?
2) send a POST request to the server with the pdf as the payload
 
*/

async function extractTextFromPDF(pathToPDF) {
  const pdfBuffer = fs.readFileSync(pathToPDF);
  const options = {};
  const data = await PDFParser(pdfBuffer, options);
  return data.text;
}
