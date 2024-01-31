const connection = require("../../Models/connection");

const exisiting_prodcut_by_id_logic = (data) => {
  console.log(data);
  const { id } = data;
  const existingProductQuery = `SELECT * FROM products WHERE id = ? `;
  return new Promise((resolve, reject) => {
    connection.query(
      existingProductQuery,
      [id],
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

module.exports = exisiting_prodcut_by_id_logic;
