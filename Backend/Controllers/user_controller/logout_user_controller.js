const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const logout_user_service = require("../../Services/user_services/logout_user_service");

const logout_user_controller = error_handler(async (req, res, next) => {
  const result = await logout_user_service(req, res);
  res.status(201).json(result);
});

module.exports = logout_user_controller;
