const AppError = require("../../Error/custom_error");
const { verify_token } = require("../../Functions/jwt/jwt");
const read_users_logic = require("../../Functions/user/admin/read_users_logic");
const udpate_user_logic = require("../../Functions/user/admin/udpate_user_logic");


const update_user_service = async (req, res) => {
  try {

    const user_id = req.params.id;
    // Getting data from req body
    const data = { ...req.body };
    console.log(data);
    const result = await udpate_user_logic(user_id, data);
    console.log(result.res_result.affectedRows);
    if (result.res_result.affectedRows > 0) {
      // const data = await verify_token(req, res);
      // const user_id = data.id;
      // const email = data.email
      const result = await read_users_logic();
      const resp = {
        data:result,
        message:`Updated user ${data.email}`
      }
      return resp;
    } else {
      throw new AppError(`No such User exist Create a new profile`, 400);
    }
  } catch (error) {
    throw error;
  }
};
module.exports = update_user_service;
