const connection = require("../../Models/connection");

const insert_user = async (data) => {
  return new Promise((resolve, reject) => {
    const { email, password } = data;
    const insertquery = `INSERT INTO USERS (email,password) VALUES(?,?)`;
    connection.query(insertquery, [email, password], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          msg: `User created successfully with an id ${rows.insertId} `,
        });
      }
    });
  });
};

module.exports = insert_user;
