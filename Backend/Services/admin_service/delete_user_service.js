const AppError = require("../../Error/custom_error");
const delete_profile_logic = require("../../Functions/profile/admin/delete_profile_logic");
const delete_user_logic = require("../../Functions/user/admin/delete_user_logic");

const delete_user_service = async (req, res) => {
  try {
    const user_id = req.body.id;

    const delete_profile_logic_result = await delete_profile_logic(user_id);
    const delete_user_logic_result = await delete_user_logic(user_id);
    if (
      delete_profile_logic_result.affectedRows > 0 &&
      delete_user_logic_result.affectedRows > 0
    ) {
      return {
        delete_user_logic_result,
        delete_user_logic_result,
      };
    } else {
      throw new AppError("Failed to delete user no such user exists ", 400);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = delete_user_service;
