const db = require("../db/db-client.js");
const fs = require("node:fs");
const util = require("node:util");
const { pipeline } = require("node:stream");
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

      /*
      There is one concept to keep in mind: someone must consume the uploaded file. The consumer could be:
  
      - Your implementation
      - The plugin itself calling the toBuffer() method
      */
      console.log("data:", data);
      const files = await pump(data.file, fs.createWriteStream(data.filename));
      console.log("files:", files);

      reply.send({ success: true, message: "File uploaded successfully" });
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
