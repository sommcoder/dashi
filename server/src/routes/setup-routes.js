import express from "express";

export const router = express.Router();

// get a template
router.get("/", (req, res, next) => {
  try {
    res.json(data); //res.json also sends
  } catch (err) {
    console.log("error:", err.message);
  }
});

// add a template
router.post("/", (req, res) => {
  try {
    res.status(200).json({ message: "Added a Template!" });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// update a template
router.put("/:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Template ${req.params.id}!` });
  } catch (err) {
    console.log("error:", err.message);
  }
});

// delete a template
router.delete("/:id", (req, res) => {
  try {
    res.status(200).json({ message: `Updated Template ${req.params.id}` });
  } catch (err) {
    console.log("error:", err.message);
  }
});
