const fs = require("node:fs").promises;
const { Buffer } = require("node:buffer");
const path = require("node:path");

const axios = require("axios");

const { DocumentProcessorServiceClient } = require("@google-cloud/documentai");

const projectId = "dashi-398620";
const location = "us"; // Format is 'us' or 'eu'
const invoiceProcessorId = "b583473c7f1573e4"; // invoice parser
// const expenseProcessorId = "3bfb41454f01c7be"; // expense parser

// determining which parser to use will be established by the CLIENT sending the POST request. We may need to add tableType or pageType into the req.body
// If it's on the Invoice Page, it's an invoice, if it's on the expense page, it's an expense!

const client = new DocumentProcessorServiceClient();

// ! Can submit one FILE, with multiple pages
async function documentRequest(filePath, mimeType) {
  /*
    - FileType is determined by default based on the page or TableType the user dropped the file on. If sales, drop in sales table/page
     
    */

  // The full resource name of the processor, e.g.:
  // projects/project-id/locations/location/processor/processor-id
  // You must create new processors in the Cloud Console first

  try {
    const name = `projects/${projectId}/locations/${location}/processors/${invoiceProcessorId}`;

    // Read the file into memory.
    console.log("path.resolve(filePath):", path.resolve(filePath));
    const imageFile = await fs.readFile(path.resolve(filePath));

    // Convert the image data to a Buffer and base64 encode it.
    const encodedImage = Buffer.from(imageFile).toString("base64");

    // prepare the request to send to Document AI API
    const request = {
      name,
      skipHumanReview: true, // no "human-in-the-middle"
      rawDocument: {
        content: encodedImage,
        mimeType: mimeType,
      },
    };
    console.log("request:", request);

    // Recognizes text entities in the PDF document
    // !     here's the issue:
    // !    returns does not exist, or it is not a file.
    // ! How am I able to READ the file above if it does not exist????
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
  } catch (err) {
    console.log("document-ai-client error:", err.message);
  }
}

module.exports = {
  documentRequest,
};
