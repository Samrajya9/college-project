const connection = require("../../Models/connection");

const checking_existing_user = async (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users WHERE email = ?`,
      [email],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.length > 0);
        }
      }
    );
  });
};

module.exports = checking_existing_user;
