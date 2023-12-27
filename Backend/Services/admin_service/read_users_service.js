const read_users_logic = require("../../Functions/user/admin/read_users_logic");

const read_users_service = async (req, res) => {
  try {
    const user_data = await read_users_logic(req, res);
    return { user_data };
  } catch (error) {
    throw error;
  }
};
module.exports = read_users_service;
