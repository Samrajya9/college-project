const connection = require("../../Models/connection");

const get_password_from_database = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT password FROM users where email =?`,
      [email],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(JSON.stringify(rows[0])));
        }
      }
    );
  });
};
module.exports = get_password_from_database;
