const connection = require("../../Models/connection");

const insert_user = async (data) => {
  return new Promise((resolve, reject) => {
    const { email, password, roles } = data;
    const insertquery = `INSERT INTO USERS (email,password,roles) VALUES(?,?,?)`;
    connection.query(insertquery, [email, password,roles], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          id:`${rows.insertId}`,
          email,
          msg: `User created successfully with an id ${rows.insertId} `,
        });
      }
    });
  });
};

module.exports = insert_user;
