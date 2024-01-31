const connection = require("../../Models/connection");
const existing_product_logic = require("./existing_product");


const create_products_logic = (data) => {
  return new Promise(async (resolve, reject) => {
    const { drug_name	,batch_no, mfg_date, exp_date, quantity, price } = data;     
    const existed_product = await existing_product_logic(data);
    // console.log(existed_product);
    productDetails = existed_product[0]
    if (existed_product.length > 0) {
      const updated_quantity = existed_product[0].quantity + quantity;
      productDetails.quantity = updated_quantity
      // console.log(productDetails);
      const update_query = `UPDATE products SET quantity=? WHERE drug_name=? AND batch_no=?`;
      connection.query(
        update_query,
        [updated_quantity, drug_name, batch_no],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            result=JSON.parse(JSON.stringify(result)),
            resolve({
              productDetails,
              result,
              message: `Quantity updated for existing product`,
            });
            
          }
        }
      );
    } else {
      const insert_query = `INSERT INTO products (drug_name,batch_no,mfg_date,exp_date,quantity,price) value(?,?,?,?,?,?)`;
      connection.query(
        insert_query,
        [drug_name, batch_no, mfg_date, exp_date, quantity, price],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            result=JSON.parse(JSON.stringify(result)),
            resolve({
              productDetails:data,
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
