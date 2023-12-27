const connection = require("../../Models/connection");
const existing_product_logic = require("./existing_product");

const create_products_csv_logic = (array_of_data) => {
  return new Promise(async (resolve, reject) => {
    // for (const [index, data] of array_of_data.entries()) {
    //   const result = await existing_product_logic(data);
    //   console.log(result);
    //   // console.log(index, data);
    // }
    const headers = Object.keys(array_of_data[0]);
    const insert_query = `INSERT INTO products (${headers.join(
      ","
    )}) VALUES ${array_of_data
      .map((values) => `('${Object.values(values).join("','")}')`)
      .join(",")}`;

    connection.query(insert_query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve({ result, message: "Prodcuts inserted success" });
      }
    });
  });
};
module.exports = create_products_csv_logic;
