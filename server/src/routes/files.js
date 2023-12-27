const db = require("../db/db-client.js");
const fs = require("node:fs");
const util = require("node:util");

/*
Streams:
- are collections of data that may not be available all at once and they don't have to fit in memory
- Work with data in CHUNKS instead of waiting for the entire data to be available at once.
- 

Pipes:
- Connects things
- In Node.js connects a readable stream to a writable stream
- This enables "chaining"
*/
const { pipeline } = require("node:stream");

const { documentRequest } = require("../services/doc-ai-client.js");

// takes a function as an input and returns a version of the same that returns a promise instead of a callback
const pumpAsync = util.promisify(pipeline);

module.exports = function fileRoutes(fastify, options, done) {
  fastify.post("/files", async (req, reply) => {
    try {
      // accepts file(s) and sends files to Document AI API for parsing
      // uses the returned object to create an array
      // uses that array to INSERT INTO our DB

      const data = await req.file();
      // we get req.file() thanks to the multi-part plugin

      console.log(
        "DATA FILE:",
        data.file,
        "DATA FIELDS:",
        data.fields,
        "DATA FIELDNAME:",
        data.fieldname,
        "DATA FILENAME:",
        data.filename,
        "DATA ENCODING:",
        data.encoding,
        "DATA MIMETYPE:",
        data.mimetype
      );

      const mimeType = data.mimetype;
      console.log("mimeType:", mimeType);

      if (mimeType === "text/csv") {
        // use csv library call to save on costs.. however if it doesn't work MOST of the time for csv files.
        // Probably can only handle simple header/row structured csv files. if there is any meta data detected, just send to document AI!
        // metadata ? send to Document AI : csv Library;
        // MAYBE .csv parsing is best handled on the client???
      }

      if (
        mimeType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        mimeType === "application/vnd.ms-excel"
      ) {
        // convert into CSV (how?)
        // and then process as CSV using a csv library.
        // is there a way to save these
      }

      if (
        mimeType === "application/pdf" ||
        mimeType === "image/png" ||
        mimeType === "image/jpeg"
      ) {
        /*
   There is one concept to keep in mind: someone must consume the uploaded file. The consumer could be:

   - Your implementation
   - The plugin itself calling the toBuffer() method
   */

        /*
    
   ***************** I think I need to create a write stream and WHEN done, send that file path to the documentRequest function below


   ** maybe I need to install Multer library to handle the multipart data type we are receiving.


   we need to READ the file into memory
    
   */
        const stream = fs.createWriteStream(data.file);
        console.log("stream:", stream);
        // The file is being ADDED to my server...?

        // call GCP Document AI:
        documentRequest(data.file, mimeType);
      } else {
        // return error. Not supported file format. This is also performed on the client however would be good to have a counter measure here too!
      }

      reply
        .code(200)
        .send({ success: true, message: "Files were successfully processed" });
    } catch (err) {
      console.log("error:", err.message);
      reply
        .code(500)
        .send({ success: false, message: "Internal Server Error" });
    }
  });

  /**
   *
   */
  fastify.get("/files", async (req, reply) => {
    try {
      // get all files by account id
      console.log("received a GET request on /files");
      reply.code(200).send(db.readAllItems());
    } catch (err) {
      console.log("Fastify error:", err.message);
    }
  });
  done();
};
