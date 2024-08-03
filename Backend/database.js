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
  const [names] = await pool.query(
    "SELECT t_id FROM trade_unions WHERE t_trade_union_name = ?",
    [data.name]
  );
  if (names.length > 0) {
    return true;
  } else return false;
}

export async function insertFormData(data) {
    const { establishmentDate, ...otherData } = data;
  
    // Insert into trade_unions
    const query = `
      INSERT INTO trade_unions (t_trade_union_name, t_address, t_establishment_date)
      VALUES (?, ?, ?);
    `;
  
    const values = [
      otherData.tradeunionname,
      otherData.address,
      establishmentDate // Ensure this is in 'YYYY-MM-DD' format
    ];
  
    try {
      // Insert into trade_unions and get the last inserted ID
      const [result] = await pool.query(query, values);
      const t_id = result.insertId;
  
      // Insert into president if data is available
      if (otherData.name) {
        const query2 = `
          INSERT INTO president (p_trade_union_id, p_name, p_nic, p_normal_phone_number, p_whatsapp_phone_number, p_email)
          VALUES (?, ?, ?, ?, ?, ?);
        `;
  
        const values2 = [
          t_id,
          otherData.name,
          otherData.nic,
          otherData.phoneNumbers?.phoneNumber1,
          otherData.phoneNumbers?.phoneNumber2,
          otherData.email
        ];
  
        await pool.query(query2, values2);
      }
  
      // Insert into secretary if data is available
      if (otherData.name2) {
        const query3 = `
          INSERT INTO secretary (s_trade_union_id, s_name, s_nic, s_normal_phone_number, s_whatsapp_phone_number, s_email)
          VALUES (?, ?, ?, ?, ?, ?);
        `;
  
        const values3 = [
          t_id,
          otherData.name2,
          otherData.nic2,
          otherData.phoneNumbers?.phoneNumber3,
          otherData.phoneNumbers?.phoneNumber4,
          otherData.email2
        ];
  
        await pool.query(query3, values3);
      }
  
      console.log("Inserted trade union ID:", t_id);
      return t_id; // Return the trade union ID if needed
    } catch (error) {
      console.error('Error inserting form data:', error);
      throw error; // Rethrow error to handle it in the calling function
    }
  }
  