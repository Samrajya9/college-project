const connection = require("../../Models/connection");

const existing_product_logic = (data) => {
  // console.log(data);
  const { drug_name, batch_no } = data;
  const existingProductQuery = `SELECT * FROM products WHERE drug_name = ? AND batch_no = ?`;
  return new Promise((resolve, reject) => {
    connection.query(
      existingProductQuery,
      [drug_name, batch_no],
      (error, result) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          const data = JSON.parse(JSON.stringify(result))
          resolve(data);
        }
      }
    );
  });
};

module.exports = existing_product_logic;
