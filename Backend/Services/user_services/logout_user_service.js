const AppError = require("../../Error/custom_error");
const { verify_token } = require("../../Functions/jwt/jwt");
const logout_user_logic = require("../../Functions/user/logout_user_logic");

const logout_user_service = async (req, res) => {
  try {
    const headers = req.headers.cookie;
    if (!headers) {
      throw new AppError(`No Cookie to Clear`, 401);
    } else {
      const token_name = headers.split("=")[0].trim();
      const data = await verify_token(req, res);
      // console.log(data);
      const result = await logout_user_logic(res, token_name);

      return {data,message:result.message};
    }
  } catch (error) {
    throw error;
  }
};

module.exports = logout_user_service;
