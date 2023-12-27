const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const update_products_service = require("../../Services/product_service/update_products_service");

const update_products_controller = error_handler(async (req, res, next) => {
  const result = await update_products_service(req, res);
  res.status(201).json({ result });
});

module.exports = update_products_controller;
