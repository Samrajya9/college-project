const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const read_one_product_service = require("../../Services/product_service/read_one_product_service");

const read_one_product_controller = error_handler(async (req, res, next) => {
    const result = await read_one_product_service(req, res);
    res.status(201).json([{
      resType: "Success",
      message:result.message,
      result
    }])
  });

  module.exports = read_one_product_controller;