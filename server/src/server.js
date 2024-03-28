require("dotenv").config();
// const test = require("../src/db/db-client.js").testConnection;

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// const db = require("../db/db-client.js");
const fs = require("node:fs");
const fse = require("fs-extra");
const path = require("node:path");
const { documentRequest } = require("./services/doc-ai-client.js");

const PORT = process.env.PORT;
const DOMAIN = process.env.DOMAIN;

const app = express();
app.use(cors());

app.post("/api/v1/files", upload.none(), (req, res) => {
  try {
    // HOW DO WE DETERMINE IF THERE ARE MULTIPLE FILES IN THE REQ.BODY?? do we add another K/V in the req.body?
    const data = req.body;
    console.log("data:", data);

    const tempFilePath = `./uploads/${data.filename}`;

    console.log("data.mimetype:", data.mimetype);
    // Ensure the temp directory exists, otherwise it's created
    fse.ensureDir("./uploads");

    // Create a write stream to the temp file path
    const writeStream = fs.createWriteStream(tempFilePath);

    // Pipe the file stream to the write stream

    // const response = await documentRequest(tempFilePath, data.mimetype);
    res.sendStatus(200);
  } catch (err) {
    console.log("error:", err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});
