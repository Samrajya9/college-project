const AppError = require("../../Error/custom_error");
const { verify_token } = require("../../Functions/jwt/jwt");
const read_profile_logic = require("../../Functions/profile/read_profile_logic");
const udpate_profile_logic = require("../../Functions/profile/udpate_profile_logic");

const update_profile_service = async (req, res) => {
  try {
    // Getting profile id from params
    // update_profile/:id http://localhost:3000/update_profile/46
    const profile_id = req.params.id;
    // Getting data from req body
    const data = { ...req.body };
    const result = await udpate_profile_logic(profile_id, data);
    console.log(result);
    if (result.affectedRows > 0) {
      const data = await verify_token(req, res);
      const user_id = data.id;
      const result = await read_profile_logic(user_id);
      return result;
    } else {
      throw new AppError(`Cannot Update profile`, 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = update_profile_service;
