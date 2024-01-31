const AppError = require("../../Error/custom_error");
const delete_profile_logic = require("../../Functions/profile/admin/delete_profile_logic");
const delete_user_logic = require("../../Functions/user/admin/delete_user_logic");

const delete_user_service = async (req, res) => {
  try {
    const user_id = req.params.userId; // Assuming the user ID is part of the URL parameters

    // Ensure that user_id is a valid value
    if (!user_id) {
      throw new AppError("Invalid or missing user ID in the URL parameters", 400);
    }

    const delete_profile_logic_result = await delete_profile_logic(user_id);
    const delete_user_logic_result = await delete_user_logic(user_id);
    if (
      delete_profile_logic_result.affectedRows > 0 &&
      delete_user_logic_result.affectedRows > 0
    ) {
      const resp = {
        data:{},
        message:`User deleted with id ${user_id}`
      }
      return resp;
    } else {
      throw new AppError("Failed to delete user no such user exists ", 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = delete_user_service;
