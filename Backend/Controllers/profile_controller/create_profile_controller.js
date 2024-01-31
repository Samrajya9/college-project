const error_handler = require("../../Abstraction/try_catch_error_handler_middleware");
const create_profile_service = require("../../Services/profile_service/create_profile_service");

const create_profile_controller = error_handler(async (req, res, next) => {
  const result = await create_profile_service(req, res);
  res.status(201).json([{
    resType: "Success",
    message:result.message,
    result
  }]);
});

module.exports = create_profile_controller;
