const AppError = require("../../Error/custom_error");
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
      return result;
    } else {
      throw new AppError("No such product exist create new product", 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = update_products_service;
