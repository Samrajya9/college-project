const AppError = require("../../Error/custom_error");
const create_products_logic = require("../../Functions/product/create_products_logic");

const create_products_service = async (req, res) => {
  try {
    const data = { ...req.body };
    for (const [key, value] of Object.entries(data)) {
      if (!data.hasOwnProperty(key) || data[key] === "") {
        throw new AppError(`Missing details for ${key}`, 400);
      }
    }
    // Formatting data
    for (const [key, value] of Object.entries(data)) {
      if (key === "quantity" || key === "price") {
        data[key] = parseInt(data[key]);
      }
    }
    const result = await create_products_logic(data);
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = create_products_service;
