const connection = require("../../Models/connection");

const create_profile_logic = (data, id) => {
  return new Promise((resolve, reject) => {
    const user_id = id;
    console.log(user_id);
    const {
      first_name,
      middle_name,
      last_name,
      date_of_birth,
      gender,
      address,
    } = data;
    const insert_query = `insert into profiles (first_name,middle_name,last_name,date_of_birth,gender,address,user_id) values(?,?,?,?,?,?,?)`;
    connection.query(
      insert_query,
      [
        first_name,
        middle_name,
        last_name,
        date_of_birth,
        gender,
        address,
        user_id,
      ],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve( result);
        }
      }
    );
  });
};

module.exports = create_profile_logic;
