import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getTradeUnionName, insertFormData } from "./database.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Testing-From the backend side");
});

app.get("/getTradeUnionName", async (req, res) => {
  console.log(req.query);
  try {
    const response = await getTradeUnionName(req.query);
    console.log(response, "this is the express");
    res.json(response); // Send the response back to the client
  } catch (error) {
    console.error("Error fetching trade union name:", error);
    res.status(500).send("Server Error"); // Handle errors
  }
});
app.post("/submitForm", async (req, res) => {
    const { establishmentDate, ...otherData } = req.body;
    console.log("Received form data:", req.body);
  
    try {
      const t_id = await insertFormData({ establishmentDate, ...otherData });
      if (t_id) {
        // If t_id is returned, insertion was successful
        res.json({ success: true });
      } else {
        // Insertion failed
        res.json({ success: false });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      res.status(500).json({ success: false });
    }
  });
  

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
