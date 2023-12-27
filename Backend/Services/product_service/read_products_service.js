const read_products_logic = require("../../Functions/product/read_products_logic");

const read_products_service = async (req, res) => {
  try {
    const result = await read_products_logic();
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = read_products_service;
