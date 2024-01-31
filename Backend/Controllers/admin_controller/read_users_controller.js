const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const read_users_service = require("../../Services/admin_service/read_users_service");

const read_users_controller = error_handler(async (req, res, next) => {
  const result = await read_users_service(req, res);
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);
});

module.exports = read_users_controller;
