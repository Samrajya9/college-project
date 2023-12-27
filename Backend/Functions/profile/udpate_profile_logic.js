const connection = require("../../Models/connection");

const udpate_profile_logic = (profile_id, data) => {
  return new Promise((resolve, reject) => {
    const {
      first_name,
      middle_name,
      last_name,
      date_of_birth,
      gender,
      address,
    } = data;
    const update_profile = `Update profiles SET first_name=?,middle_name=?,last_name=?,date_of_birth=?,gender=?,address=? WHERE id=?`;
    connection.query(
      update_profile,
      [
        first_name,
        middle_name,
        last_name,
        date_of_birth,
        gender,
        address,
        profile_id,
      ],
      (error, results) => {
        if (error) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

module.exports = udpate_profile_logic;
