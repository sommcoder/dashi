import express from "express";
import sql from "../../../postgres";

export const router = express.Router();

// submit a file via DropZone component
// after client-side validation dropzone sends data to server for further validation before sending to the Database
router.post("/drop-zone", (req, res) => {
  try {
    res.status(200).json({ message: "Submitted File!" });


    // what kind of template was this?
    // item csv, sales csv, labour csv?
    const addTable = await sql`
    INSERT INTO 
    `

  } catch (err) {
    console.log("error:", err.message);
  }
});
