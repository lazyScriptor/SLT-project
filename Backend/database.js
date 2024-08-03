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
export async function getTradeUnionName(data) {
    console.log(data.name);
    const [names] = await pool.query("SELECT t_id FROM trade_unions WHERE t_trade_union_name = ?", [data.name]);
    if(names.length>0){
        return true
    }else return false
   
  }
  