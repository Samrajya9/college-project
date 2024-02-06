const AppError = require("../../Error/custom_error");
const delete_products_logic = require("../../Functions/product/delete_products_logic");

const  delete_products_service = async (req, res) => {
  try {

    const id = req.params.ProductId;
    console.log(id);
    const result = await delete_products_logic(id);
    console.log(result);
    if (result.log.affectedRows> 0 &&result.product.affectedRows> 0 ) {
      const resp = {
        data: {},
        message : `Product with id ${id} deleted`
      }
      return resp;
    } else {
      throw new AppError("Failed to delete product no such product exists ", 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = delete_products_service;
