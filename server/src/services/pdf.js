import { fs } from "node:fs";
import PDFParser from "pdf-parse";
import * as path from "../../test/pdf/Amazon - CA333K74RE2I.pdf";

/*
 
1) first handle client-side validation. Is the file a pdf?
2) send a POST request to the server with the pdf as the payload
 
*/

async function extractTextFromPDF(path) {
  const pdfBuffer = fs.readFileSync(path);
  const options = {};
  const data = await PDFParser(pdfBuffer, options);
  console.log("data.text:", data.text);
  return data.text;
}

/*
 
1) does pdf have images?
2) remove images
3) convert the rest of pdf to png
4) feed the png to tesseract OCR to get text in the right order
 
*/
// to extract the text in the correct order on a pdf it may be easier to convert pdf to image
