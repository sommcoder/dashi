/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
import { DocumentProcessorServiceClient } from "@google-cloud/documentai";
import fs from "node:fs/promises";

console.log("DocumentProcessorServiceClient:", DocumentProcessorServiceClient);

const projectId = "dashi-398620";
const location = "us"; // Format is 'us' or 'eu'
const processorId = "b4de8cf5093be5a"; // Create processor in Cloud Console
const filePath = "../test/pdf/amazon.pdf";

// Instantiates a client
// apiEndpoint regions available: eu-documentai.googleapis.com, us-documentai.googleapis.com (Required if using eu based processor)
// const client = new DocumentProcessorServiceClient({
//   apiEndpoint:
//     "https://us-documentai.googleapis.com/v1/projects/14778339404/locations/us/processors/b4de8cf5093be5a/processorVersions/pretrained-foundation-model-v1.0-2023-08-22:process",
// });
const client = new DocumentProcessorServiceClient();
console.log("client:", client);

async function quickstart() {
  // The full resource name of the processor, e.g.:
  // projects/project-id/locations/location/processor/processor-id
  // You must create new processors in the Cloud Console first
  const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;

  // Read the file into memory.
  const imageFile = await fs.readFile(filePath);

  // Convert the image data to a Buffer and base64 encode it.
  const encodedImage = Buffer.from(imageFile).toString("base64");

  const request = {
    name,
    rawDocument: {
      content: encodedImage,
      mimeType: "application/pdf",
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
  const [page1] = document.pages;
  const { paragraphs } = page1;

  for (const paragraph of paragraphs) {
    const paragraphText = getText(paragraph.layout.textAnchor);
    console.log(`Paragraph text:\n${paragraphText}`);
  }
}

quickstart();
