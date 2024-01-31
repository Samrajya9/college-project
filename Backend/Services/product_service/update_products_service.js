const AppError = require("../../Error/custom_error");
const exisiting_prodcut_by_id_logic = require("../../Functions/product/exisiting_prodcut_by_id_logic");
const existing_product_logic = require("../../Functions/product/existing_product");
const update_products_logic = require("../../Functions/product/update_products_logic");

const update_products_service = async (req, res) => {
  try {
    const data = { ...req.body };
    for (const [key, value] of Object.entries(data)) {
      if (key == "id" || key === "quantity" || key === "price") {
        data[key] = parseInt(data[key]);
      }
    }
    const result = await update_products_logic(data);
    
    if (result.res_result.affectedRows > 0) {
      const productsDetaisls = await exisiting_prodcut_by_id_logic(data) ;
      console.log(productsDetaisls);
      const resp= {
        data: productsDetaisls[0],
        message : result.message
      }
      return resp;
    } else {
      throw new AppError("No such product exist create new product", 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = update_products_service;
