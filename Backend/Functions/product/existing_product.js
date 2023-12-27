const connection = require("../../Models/connection");

const existing_product_logic = (data) => {
  const { name, batch_no } = data;

  const existingProductQuery = `SELECT * FROM products WHERE name = ? AND batch_no = ?`;

  return new Promise((resolve, reject) => {
    connection.query(
      existingProductQuery,
      [name, batch_no],
      (error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(JSON.parse(JSON.stringify(result)));
        }
      }
    );
  });
};

module.exports = existing_product_logic;
