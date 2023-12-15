const db = require("../db/db-client.js");
const fs = require("node:fs");
const util = require("node:util");
const { pipeline } = require("node:stream");

const { documentRequest } = require("../services/doc-ai-client.js");

const pump = util.promisify(pipeline);

module.exports = function fileRoutes(fastify, options, done) {
  fastify.post("/files", async (req, reply) => {
    try {
      // accepts file(s) and sends files to Document AI API for parsing
      // uses the returned object to create an array
      // uses that array to INSERT INTO our DB

      const data = await req.file();
      // we get req.file() thanks to the multi-part plugin

      console.log(
        data.file,
        data.fields,
        data.fieldname,
        data.filename,
        data.encoding,
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
        // and then process as CSV using the csv library
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
        // console.log("data:", data);
        const files = await pump(
          data.file,
          fs.createWriteStream(data.filename)
        );
        // console.log("files:", files);

        // The file is being ADDED to my server...?

        documentRequest(files, mimeType);
      } else {
        // return error. Not supported file format. This is also performed on the client however would be good to have a counter measure here too!
      }

      reply.send("file processed");
    } catch (err) {
      console.log("error:", err.message);
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
