const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const login_user_service = require("../../Services/user_services/login_user_service");

const login_user_controller = error_handler(async (req, res, next) => {
  const result = await login_user_service(req, res);
  res.status(201).json([{
    resType:"Success",
    message:result.message,
    result
  }]);
});

module.exports = login_user_controller;
