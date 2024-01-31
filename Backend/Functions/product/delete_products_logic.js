const connection = require("../../Models/connection");

const delete_products_logic = (id) => {
  return new Promise((resolve, reject) => {
    const delete_query = `DELETE FROM products WHERE id=?`;
    connection.query(delete_query, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
resolve(result)
      }
    });
  });
};
module.exports = delete_products_logic;
