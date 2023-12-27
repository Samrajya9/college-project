const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const read_products_service = require("../../Services/product_service/read_products_service");

const read_products_controller = error_handler(async (req, res, next) => {
  const result = await read_products_service(req, res);
  res.status(201).json({ result });
});
module.exports = read_products_controller;
