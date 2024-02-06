const error_handler = require("../../Abstraction/try_catch_error_handler_middleware")
const create_user_service = require("../../Services/user_services/create_user_service")

const create_user_conttroller = error_handler(async (req, res, next) => {
  const result = await create_user_service(req, res)
  res.status(201).json([
    {
      resType: "Success",
      message: result.message,
      result,
    },
  ])
})

module.exports = create_user_conttroller
