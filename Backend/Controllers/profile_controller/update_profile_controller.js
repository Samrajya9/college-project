const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const update_profile_service = require("../../Services/profile_service/update_profile_service");

const update_profile_controller = error_handler(async (req, res, next) => {
  const result = await update_profile_service(req, res);
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);});
module.exports = update_profile_controller;
