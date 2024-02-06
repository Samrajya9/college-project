const connection = require("../../Models/connection");

const update_products_logic = (data) => {
  return new Promise((resolve, reject) => {
    let { id, drug_name, batch_no,  mfg_date, exp_date, quantity, price } =
      data;
    const setValues = [];
    // Build the SET clause dynamically based on the provided data
    if (drug_name) setValues.push(`drug_name='${drug_name}'`);
    if (batch_no) setValues.push(`batch_no='${batch_no}'`);
    if (mfg_date) setValues.push(`mfg_date='${mfg_date}'`);
    if (exp_date) setValues.push(`exp_date='${exp_date}'`);
    if (quantity||quantity == 0) setValues.push(`quantity=${quantity}`);
    if (price) setValues.push(`price=${price}`);

    // Ensure there are fields to update
    if (setValues.length === 0) {
      reject(new Error("No fields to update.", 400));
      return;
    }
    console.log(setValues);
    const update_query = `UPDATE products SET ${setValues.join(
      ", "
    )} WHERE id=${id}`;
console.log(update_query);
    connection.query(update_query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        // const res_result = JSON.parse(JSON.stringify(result));
        const resp ={
          res_result:JSON.parse(JSON.stringify(result)),
          message: `Product update at id: ${id}`
        }
        resolve(resp);
      }
    });
  });
};
module.exports = update_products_logic;
