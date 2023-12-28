const db = require("../db/db-client.js");
const fs = require("node:fs");
const path = require("node:path");
const util = require("node:util");
const { pipeline } = require("node:stream");
const { documentRequest } = require("../services/doc-ai-client.js");

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

// takes a function as an input and returns a version of the same that returns a promise instead of a callback
const pump = util.promisify(pipeline);

module.exports = function fileRoutes(fastify, options, done) {
  fastify.post("/files", async (req, reply) => {
    try {
      // HOW DO WE DETERMINE IF THERE ARE MULTIPLE FILES IN THE REQ.BODY?? do we add another K/V in the req.body?
      const data = await req.file();

      // await data.toBuffer(); // Buffer

      const filename = data.filename;
      const filePath = path.join("../server/src/uploads/", filename);
      await pump(data.file, fs.createWriteStream(filePath));

      // if  single file:
      const res = await documentRequest(filePath, data.mimetype);
      console.log("res:", res);
      // if multiple files, batch processing:
      // await batchProcessDocument();
      // if (data.mimeType === "text/csv") {
      //   // use csv library call to save on costs.. however if it doesn't work MOST of the time for csv files than there would be no point in implementing it
      //   // metadata ? Document AI : CSV Parse;
      // }

      // if (
      //   data.mimeType ===
      //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      //   data.mimeType === "application/vnd.ms-excel"
      // ) {
      //   // convert into CSV (how?)
      //   // and then process as CSV using a csv library.
      //   // is there a way to save these
      // }

      // if (
      //   data.mimeType === "application/pdf" ||
      //   data.mimeType === "image/png" ||
      //   data.mimeType === "image/jpeg"
      // ) {
      // } else {
      //   // return error. Not supported file format.
      //   // This is also performed on the client however would be good to have a counter measure here too!
      // }

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
