const AppError = require("../../Error/custom_error");
const { hash_password } = require("../../Functions/bcrypt/password_hash");
const checking_exisiting_user = require("../../Functions/user/checking_exisiting_user");
const insert_user = require("../../Functions/user/insert_user");

const create_user_service = async (req, res) => {
  try {
    console.log(req.body);
    // Checking if the req.body field are present or not
    if (!req.body.email || !req.body.password) {
      throw new AppError(`Incomplete details`, 400);
    }
    // Getting required info from req.body
    const data = { ...req.body };
    const exisiting_user = await checking_exisiting_user(data.email);
    if (exisiting_user) {
      throw new AppError(`User already exists`, 400);
    }
    // Hashing password
    const hashed_password = await hash_password(data.password);
    // Storing user into the database
    data.password = hashed_password;

    const result = await insert_user(data);
    const resp = {
      data:result,
      message:`Create user with email ${data.email}`
    }
    
    return resp;
  } catch (error) {
    throw error;
  }
};

module.exports = create_user_service;
