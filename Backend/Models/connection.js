require("dotenv").config();
const mysql = require("mysql");
const AppError = require("../Error/custom_error");

const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});
connection.connect((err) => {
  if (err) {
    throw new AppError("Error in connceting databse", 500);
  }
  console.log("connceted to the database successfully");
});
module.exports = connection;
