const connection = require("../../Models/connection");

const delete_profile_logic = (profile_id) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE    FROM USER WHERE ID= ?`;
    connection.query(query, [profile_id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(resolve);
      }
    });
  });
};
module.exports = delete_profile_logic;
