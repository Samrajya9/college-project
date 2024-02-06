const connection = require("../../Models/connection");

const delete_products_logic = async (id) => {
  try {
    const delete_query = `DELETE FROM products WHERE id=?`;
    const delete_product_log_query = `DELETE FROM product_log WHERE product_id=?`;

    // Define a promise-based function to delete product log
    const delLog = () => {
      return new Promise((resolve, reject) => {
        connection.query(delete_product_log_query, [id], (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };

    // Define a promise-based function to delete product
    const delProduct = () => {
      return new Promise((resolve, reject) => {
        connection.query(delete_query, [id], (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };

    // Execute both delete operations concurrently
    const [logResult, productResult] = await Promise.all([delLog(), delProduct()]);

    return { log: logResult, product: productResult };
  } catch (error) {
    throw error; // Forward the error to the caller
  }
};

module.exports = delete_products_logic;
