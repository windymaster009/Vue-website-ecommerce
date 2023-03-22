import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port:3306,
  password: '',
  database: 'carshop'
});
 
export default db;