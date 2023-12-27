const connection = require("../../Models/connection");

const delete_products_logic = (id) => {
  return new Promise((resolve, reject) => {
    const delete_query = `DELETE FROM products WHERE id=?`;
    connection.query(delete_query, [id], (error, result) => {
      if (error) {
        reject(error);
      } else {
        if (result.affectedRows > 0) {
          resolve({ message: `Product with id ${id} deleted` });
        } else {
          resolve({ message: `Product with id ${id} not found` });
        }
      }
    });
  });
};
module.exports = delete_products_logic;
