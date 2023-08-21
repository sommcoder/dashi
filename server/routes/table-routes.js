import express from "express";

// temporary testing solution until we hook up the DB:
import data from "../db.json" assert { type: "json" };

export const router = express.Router();

// get a table
router.get("/", (req, res, next) => {
  try {
    res.json(data); //res.json also sends
  } catch (err) {
    console.log("error:", err.message);
  }
});

// add a table
router.post("/", (req, res) => {
  try {
    res.status(200).json({ message: "Set Table!" });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// update a table
router.put("/:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Table ${req.params.id}!` });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// remove a table
router.delete("/:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Table ${req.params.id}` });
  } catch (err) {
    console.log("error:", err.message);
  }
});
