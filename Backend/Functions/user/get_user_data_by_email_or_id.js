const connection = require("../../Models/connection");

const get_user_data_by_email_or_data = async (parameter) => {
  let setparameter;
  if (typeof parameter == `string`) {
    setparameter = `email`;
  }
  if (typeof parameter == `number`) {
    setparameter = `id`;
  }
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users WHERE ${setparameter} = ?`,
      [parameter],
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
module.exports = get_user_data_by_email_or_data;
