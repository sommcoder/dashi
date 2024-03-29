require("dotenv").config();
// const test = require("../src/db/db-client.js").testConnection;
const express = require("express");
const cors = require("cors");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "uploads/",
});
const fileFilter = (req, file, cb) => {
  // TODO: need to add common csv types here!
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5000000, // 5mb
  },
});
// const db = require("../db/db-client.js");
const fs = require("node:fs");
const fse = require("fs-extra");
const path = require("node:path");
const { documentRequest } = require("./services/doc-ai-client.js");

const PORT = process.env.PORT;
const DOMAIN = process.env.DOMAIN;

const app = express();
app.use(cors());

// handle single file upload:
app.post("/api/v1/files", upload.single("userFiles"), uploadFiles);

function uploadFiles(req, res) {
  try {
    // HOW DO WE DETERMINE IF THERE ARE MULTIPLE FILES IN THE REQ.BODY?? do we add another K/V in the req.body?
    const data = req.file;
    console.log("data:", data);
    console.log("data.buffer:", data.buffer);
    console.log("data.destination:", data.destination);
    console.log("data.filename:", data.filename);
    console.log("data.path:", data.path);

    fs.access(data.path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
      documentRequest(data.path, data.mimetype)
        .then((data) => {
          console.log("data:", data);
        })
        .catch((err) => {
          console.log("File does not exist or is not readable");
        });
    });

    // res.status(200).json({ message: "Express: File uploaded successfully!" });
  } catch (err) {
    console.log("UploadFiles error:", err.message);
  }
}

app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});
