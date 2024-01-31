const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const read_profile_service = require("../../Services/profile_service/read_profile_service");

const read_profile_controller = error_handler(async (req, res, next) => {
  const result = await read_profile_service(req, res);
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);
});
module.exports = read_profile_controller;
