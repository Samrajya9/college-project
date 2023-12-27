const { verify_token } = require("../../Functions/jwt/jwt");
const read_profile_logic = require("../../Functions/profile/read_profile_logic");

const read_profile_service = async (req, res) => {
  try {
    const data = await verify_token(req, res);
    const user_id = data.id;
    const result = await read_profile_logic(user_id);
    if (Object.keys(result).length < 1) {
      throw new AppError(`No profile exist`, 400);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = read_profile_service;
