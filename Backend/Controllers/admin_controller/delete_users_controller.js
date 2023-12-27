const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const delete_user_service = require("../../Services/admin_service/delete_user_service");

const delete_users_controller = error_handler(async (req, res, next) => {
  const result = await delete_user_service(req, res);
  res.status(201).json(result);
});
module.exports = delete_users_controller;
