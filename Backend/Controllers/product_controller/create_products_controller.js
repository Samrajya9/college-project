const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const create_products_service = require("../../Services/product_service/create_products_service");

const create_products_controller = error_handler(async (req, res, next) => {
  const result = await create_products_service(req, res);
  
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);
});
module.exports = create_products_controller;
