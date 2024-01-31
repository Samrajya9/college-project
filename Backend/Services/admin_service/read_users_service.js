const read_users_logic = require("../../Functions/user/admin/read_users_logic");

const read_users_service = async (req, res) => {
  try {
    const user_data = await read_users_logic(req, res);
    const resp ={
      data:user_data,
      message:`All User with their data`
    }
    return  resp ;
  } catch (error) {
    throw error;
  }
};
module.exports = read_users_service;
