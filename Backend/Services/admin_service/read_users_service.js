const AppError = require("../../Error/custom_error");
const read_users_logic = require("../../Functions/user/admin/read_users_logic");

const read_users_service = async (req, res) => {
  try {
    const id= req.params.user_id;
    if(!id){
      const user_data = await read_users_logic(req, res);
     
      const resp ={
        data:user_data,
        message:`All User with their data`
      }
      return  resp ;
    }else{
      const user_data = await read_users_logic(req, res);
      const result = user_data.find(user => user.users.id == id);
      if(!result){
        throw new AppError(`no user found with id ${id}` ,400)
      }else{
        const resp ={
          data:result,
          message:`User with their data`
        }
        return  resp ;
      }

    }


  } catch (error) {
    throw error;
  }
};
module.exports = read_users_service;
