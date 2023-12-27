const connection = require("../../../Models/connection");

const delete_user_logic = (user_id) => {
  return new Promise((resolve, reject) => {
    const delete_query = `DELETE FROM users where id=?`;
    connection.query(delete_query, [user_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports = delete_user_logic;
