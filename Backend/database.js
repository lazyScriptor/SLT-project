import mysql from "mysql2";
import dotenv from "dotenv";
import dayjs from "dayjs";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();
// const port = process.env.PORT || 8085;