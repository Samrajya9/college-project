const connection = require("../../Models/connection");

const read_products_logic = () => {
  return new Promise(async (resolve, reject) => {

    async function read_products() {
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
    }

    async function read_product_log() {
      return new Promise((resolve, reject) => {
        const read_query = `SELECT * FROM product_log`;
        connection.query(read_query, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(JSON.parse(JSON.stringify(result)));
          }
        });
      });
    }

    try {
      const result_read_products = await read_products();
      const result_read_product_log = await read_product_log();
      resolve({ product:result_read_products,product_log: result_read_product_log });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = read_products_logic;
