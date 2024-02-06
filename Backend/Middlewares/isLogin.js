const error_handler = require("../Abstraction/try_catch_error_handler_middleware");
const AppError = require("../Error/custom_error");

const isLogin = error_handler(async (req, res, next) => {
    try {
        const headers = req.headers.cookie;
        const token = headers ? headers.split("=")[1] : null;
        
        if (!token) {
            throw new AppError(`Unauthorized`, 401);
        } else {
            return true;
        }
    } catch (error) {
        throw error;
    }
});

module.exports = isLogin;
