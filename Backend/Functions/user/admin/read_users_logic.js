const connection = require("../../../Models/connection");
const read_users_logic = () => {
  return new Promise((resolve, reject) => {
    const read_users_query = `
      SELECT 
  users.id AS prim_user_id,
  users.email,
  profiles.id AS profile_id,
  profiles.first_name,
  profiles.middle_name,
  profiles.last_name,
  profiles.date_of_birth,
  profiles.gender,
  profiles.address,
  profiles.user_id
FROM 
  users
LEFT JOIN 
  profiles ON users.id = profiles.user_id
;
    `;
    connection.query(read_users_query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        const jsonresult = JSON.parse(JSON.stringify(result));
        const formatted_result = jsonresult.map((rows) => ({
          users: {
            id: rows.prim_user_id,
            email: rows.email,
          },
          profile: {
            id: rows.profile_id,
            first_name: rows.first_name,
            middle_name: rows.middle_name,
            last_name: rows.last_name,
            date_of_birth: rows.date_of_birth,
            gender: rows.gender,
            address: rows.address,
            user_id: rows.user_id,
          },
        }));
        resolve(formatted_result);
      }
    });
  });
};
module.exports = read_users_logic;
