const connection = require("../../Models/connection");

const read_profile_logic = (user_id) => {
  return new Promise((resolve, reject) => {
    const readProfile = `SELECT * FROM profiles WHERE user_id=?`;
    connection.query(readProfile, [user_id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const jsonresult = JSON.parse(JSON.stringify(result));
        resolve(jsonresult[0]);
      }
    });
  });
};

module.exports = read_profile_logic;
