require("dotenv").config();
const jwt = require("jsonwebtoken");
const AppError = require("../../Error/custom_error");
const secret = process.env.SECRET;

async function assign_jwt(playload) {
  // Creating JSON Web Token with payload
  const token = jwt.sign(playload, secret);
  return token;
}

async function verify_token(req, res) {
  const headers = req.headers.cookie;
  const token = headers.split("=")[1];
  // console.log(token[1]);
  try {
    if (!token) {
      throw new AppError(`Unauthorized`, 401);
    }
    // Verify the token using your secret key
    const decoded = await jwt.verify(token, secret);
    // Attach the decoded payload to the request object for further use
    return Promise.resolve(decoded);
  } catch (error) {
    // If the token verification fails, return an unauthorized status
    throw error;
  }
}
module.exports = { assign_jwt, verify_token };
