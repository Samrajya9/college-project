const delete_products_logic = require("../../Functions/product/delete_products_logic");

const delete_products_service = async (req, res) => {
  try {
    const data = { ...req.body };
    const id = data.id;
    const result = await delete_products_logic(id);
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = delete_products_service;
