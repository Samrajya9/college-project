const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const update_user_service = require("../../Services/admin_service/update_user_service");


const update_user_controller = error_handler(async (req, res, next) => {
  const result = await update_user_service(req, res);
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);});
module.exports = update_user_controller;
