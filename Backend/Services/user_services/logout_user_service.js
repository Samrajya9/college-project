const AppError = require("../../Error/custom_error");
const logout_user_logic = require("../../Functions/user/logout_user_logic");

const logout_user_service = async (req, res) => {
  try {
    const headers = req.headers.cookie;
    if (!headers) {
      throw new AppError(`Unauthorized`, 401);
    } else {
      const token_name = headers.split("=")[0].trim();
      const result = await logout_user_logic(res, token_name);

      return result;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = logout_user_service;
