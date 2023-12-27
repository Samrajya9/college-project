const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const delete_products_service = require("../../Services/product_service/delete_products_service");

const delete_products_controllers = error_handler(async (req, res, next) => {
  const result = await delete_products_service(req, res);
  res.status(201).json({ result });
});
module.exports = delete_products_controllers;
