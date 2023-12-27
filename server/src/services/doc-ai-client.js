const fs = require("node:fs").promises;
const { Buffer } = require("node:buffer");

const axios = require("axios");

const { DocumentProcessorServiceClient } = require("@google-cloud/documentai");

const projectId = "dashi-398620";
const location = "us"; // Format is 'us' or 'eu'
const invoiceProcessorId = "b583473c7f1573e4"; // invoice parser
// const expenseProcessorId = "3bfb41454f01c7be"; // expense parser

const client = new DocumentProcessorServiceClient();

async function documentRequest(file, mimeType) {
  /*
- FileType is determined by default based on the page or TableType the user dropped the file on. If sales, drop in sales table/page
 
*/

  // The full resource name of the processor, e.g.:
  // projects/project-id/locations/location/processor/processor-id
  // You must create new processors in the Cloud Console first
  const name = `projects/${projectId}/locations/${location}/processors/${invoiceProcessorId}`;

  // we need to READ the file into memory

  // Convert the image data to a Buffer and base64 encode it.
  const encodedImage = Buffer.from(file).toString("base64");

  // prepare the request to send to Document AI API
  const request = {
    name,
    skipHumanReview: true, // no "human-in-the-middle"
    rawDocument: {
      content: encodedImage,
      mimeType: mimeType,
    },
  };

  // Recognizes text entities in the PDF document
  //////// here's the issue:
  const [result] = await client.processDocument(request);

  console.log("result:", result);

  const { document } = result;

  // Get all of the document text as one big string
  const { text } = document;
  console.log("text:", text);

  // Extract shards from the text field
  const getText = (textAnchor) => {
    if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
      return "";
    }

    // First shard in document doesn't have startIndex property
    const startIndex = textAnchor.textSegments[0].startIndex || 0;
    const endIndex = textAnchor.textSegments[0].endIndex;

    return text.substring(startIndex, endIndex);
  };

  // Read the text recognition output from the processor
  console.log("The document contains the following paragraphs:");
  console.log("document.pages:", document.pages);
  const [page1] = document.pages;
  const { paragraphs } = page1;

  let paragraphText = "";
  for (const paragraph of paragraphs) {
    paragraphText = getText(paragraph.layout.textAnchor);
    console.log(`Paragraph text:\n${paragraphText}`);
  }

  const responseObj = {
    paragraphText: paragraphText,
  };

  return responseObj;
}

module.exports = {
  documentRequest,
};
