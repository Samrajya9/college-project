const connection = require("../../../Models/connection");
const read_profile_logic = require("../read_profile_logic");

const delete_profile_logic = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const profile_result = await read_profile_logic(user_id);
    if (!profile_result) {
      resolve({ affectedRows: 1 });
    } else {
      const delete_query = `DELETE FROM profiles where user_id=?`;
      connection.query(delete_query, [user_id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    }
  });
};
module.exports = delete_profile_logic;
