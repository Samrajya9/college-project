const connection = require("../../Models/connection");

const read_products_logic = () => {
  return new Promise((resolve, reject) => {
    const read_query = `SELECT * FROM products`;
    connection.query(read_query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(JSON.stringify(result)));
      }
    });
  });
};

module.exports = read_products_logic;
