import fs from "fs";
import PDFParser from "pdf-parse";

const file = "../../test/pdf/amazon.pdf";

// Function to read and parse a PDF file
async function parsePDF(file) {
  try {
    // Read the PDF file using fs.promises
    const dataBuffer = await fs.promises.readFile(file);

    // Create a PDFParser instance
    const pdfParser = new PDFParser(dataBuffer);

    // Parse the PDF content
    await pdfParser.load();

    // Get the text content from the PDF
    const text = pdfParser.getText();

    // You can do whatever you want with the extracted text here
    console.log("text:", text);

    return text;
  } catch (error) {
    console.error("Error parsing PDF:", error);
  }
}

// Usage
const pdfFilePath = "path-to-your-pdf-file.pdf";
parsePDF(pdfFilePath);

// async function extractTextFromPDF(path) {
//   const pdfBuffer = fs.readFileSync(path);
//   const options = {};
//   const data = await PDFParser(pdfBuffer, options);
//   console.log("data.text:", data.text);
//   return data.text;
// }

/*
 
1) does pdf have images?
2) remove images
3) convert the rest of pdf to png
4) feed the png to tesseract OCR to get text in the right order
 
// to extract the text in the correct order on a pdf it may be easier to convert pdf to image

*/
