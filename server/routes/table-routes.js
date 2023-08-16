import express from "express";

export const router = express.Router();

// get a table
router.get("/tables", (req, res) => {
  try {
    res.status(200).json({ message: "Got Tables!" });
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
