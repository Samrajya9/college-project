const AppError = require("../../Error/custom_error");
const { verify_token } = require("../../Functions/jwt/jwt");
const create_profile_logic = require("../../Functions/profile/create_profile_logic");

const create_profile_service = async (req, res) => {
  try {
    if (!req.body) {
      throw new AppError(`Missing details `, 400);
    }
    const data = { ...req.body };
    const user_id = await verify_token(req, res);
    const id = user_id.id;
    //  checking for missing details and letting the middles name be empty
    Object.entries(data).forEach(([key, value]) => {
      if (key === `middlename` && value === ``) {
        return;
      }
      if (value === ``) {
        throw new AppError(`Missing details for ${key}`, 400);
      }
    });
    const result = await create_profile_logic(data, id);
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = create_profile_service;
