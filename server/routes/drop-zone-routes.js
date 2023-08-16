import express from "express";

export const router = express.Router();

// submit a file via DropZone component
router.post("/drop-zone", (req, res) => {
  try {
    res.status(200).json({ message: "Submitted File!" });
  } catch (err) {
    console.log("error:", err.message);
  }
});
