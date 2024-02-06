const error_handler = require("../Abstraction/try_catch_error_handler_middleware");
const AppError = require("../Error/custom_error");
const { verify_token } = require("../Functions/jwt/jwt");

const isAdmin = error_handler(async (req, res, next) => {
    try {
        const result = await verify_token(req,res)
        if (!result) {
            throw new AppError(`Unauthorized`, 401);
        } else {
            if(result.roles !== 'admin'){
                throw new AppError(`Unauthorized not a admin`, 401)
            }else{
                return true
            }
        }
    } catch (error) {
        throw error;
    }
});

module.exports = isAdmin;
