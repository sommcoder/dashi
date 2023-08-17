import express from "express";

// temporary testing solution until we hook up the DB:
import data from "../db.json" assert { type: "json" };

export const router = express.Router();

// get a table
router.get("/tables", (req, res, next) => {
  try {
    console.log("req.params:", req.params);
    console.log("req.query:", req.query);
    console.log("req.url:", req.url);
    console.log("req.ip:", req.ip);
    console.log("req.path:", req.path);
    res.status(200).json({ message: "Got Tables!" });
    res.status(200).send(data); // express will determine the content-type automatically and send it for us!
  } catch (err) {
    console.log("error:", err.message);
  }
});

// add a table
router.post("/tables", (req, res) => {
  try {
    res.status(200).json({ message: "Set Table!" });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// update a table
router.put("/tables:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Table ${req.params.id}!` });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// remove a table
router.delete("/tables:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Table ${req.params.id}` });
  } catch (err) {
    console.log("error:", err.message);
  }
});
