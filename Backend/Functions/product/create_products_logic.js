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
      const insert_product_log_query = `INSERT INTO product_log (product_id) value(?)`;
      function add_product(insert_query) {
        return new Promise((resolve, reject) => {
          connection.query(
            insert_query,
            [drug_name, batch_no, mfg_date, exp_date, quantity, price],
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                result = JSON.parse(JSON.stringify(result));
                resolve({
                  productDetails: data,
                  result,
                  message: `Product added with id ${result.insertId}`,
                });
              }
            }
          );
        });
      }
const result_add_product = await add_product(insert_query);
// console.log(result_add_product);
function add_product_log(insert_product_log_query ){
return new Promise((resolve, reject) => {
  connection.query(
    insert_product_log_query,
    [result_add_product.result.insertId],
    (err,result)=>{
      if(err){
        reject(err)
      }else{
        result=JSON.parse(JSON.stringify(result));
        resolve({
          product_log_id:result.insertId,
          result,
          message: `Product_log added with id ${result.insertId}`
        })
      }
    }
  )
})
}
const result_add_product_log = await add_product_log(insert_product_log_query);
resolve({
  result_add_product,
  result_add_product_log
});


    }
  });
};

module.exports = create_products_logic;
