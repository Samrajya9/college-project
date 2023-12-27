const connection = require("../../Models/connection");
const existing_product_logic = require("./existing_product");
const create_products_logic = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    const { name, batch_no, drug_name, mfg_date, exp_date, quantity, price } =
      data;
    const existed_product = await existing_product_logic(data);
    if (existed_product.length > 0) {
      const updated_quantity = existed_product[0].quantity + quantity;
      const update_query = `UPDATE products SET quantity=? WHERE name =? AND batch_no=?`;
      connection.query(
        update_query,
        [updated_quantity, name, batch_no],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              result: JSON.parse(JSON.stringify(result)),
              mesaage: `Quantity updated for existing product`,
            });
          }
        }
      );
    } else {
      const insert_query = `INSERT INTO products (name,batch_no,drug_name,mfg_date,exp_date,quantity,price) value(?,?,?,?,?,?,?)`;
      connection.query(
        insert_query,
        [name, batch_no, drug_name, mfg_date, exp_date, quantity, price],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              result,
              message: `Product added with id ${result.insertId}`,
            });
          }
        }
      );
    }
  });
};

module.exports = create_products_logic;
