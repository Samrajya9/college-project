const AppError = require("../../Error/custom_error");
const { compare_password } = require("../../Functions/bcrypt/password_hash");
const { assign_jwt } = require("../../Functions/jwt/jwt");
const checking_existing_user = require("../../Functions/user/checking_exisiting_user");
const get_password_from_database = require("../../Functions/user/get_db_passowrd");
const get_user_data_by_email_or_data = require("../../Functions/user/get_user_data_by_email_or_id");

const login_user_service = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new AppError("Incomplete details", 400);
    }
    // Getting required info from req.body
    const { email, password } = req.body;

    // Checking if the email exitst or not
    const existing_user = await checking_existing_user(email);
    if (!existing_user) {
      throw new AppError("Email not found", 400);
    }
    // Getting password from database
    const dbPassword = await get_password_from_database(email);

    // converting password into json format
    const dbPasswordJSON = JSON.parse(JSON.stringify(dbPassword));

    // JSON format password into string
    const dbPasswordstring = dbPasswordJSON[0].password;

    // Comparing the password
    const matchPassword = await compare_password(password, dbPasswordstring);
    if (!matchPassword) {
      throw new AppError("Password not match", 400);
    } else {
      // Assiging token
      const user_data = await get_user_data_by_email_or_data(email);
      const access_token = await assign_jwt(user_data);

      // sending token on cookie
      res.cookie("access_token", access_token, {
        maxAge: 86400000, // 24 hours in milliseconds (adjust as needed)
        httpOnly: true, // Cookie is only accessible via HTTP(S)
        secure: false,
        sameSite: "strict", // Restrict cross-origin cookie sharing
      });
      return user_data;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = login_user_service;
