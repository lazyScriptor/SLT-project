import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    return res.json("Testing-From the backend side");
  });





dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

