import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getTradeUnionName } from "./database.js";

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
      console.log(response, 'this is the express');
      res.json(response);  // Send the response back to the client
    } catch (error) {
      console.error('Error fetching trade union name:', error);
      res.status(500).send('Server Error');  // Handle errors
    }
  });
  
dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
