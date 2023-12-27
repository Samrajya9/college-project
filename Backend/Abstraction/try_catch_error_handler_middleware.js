const AppError = require("../Error/custom_error");

const error_handler = (controller) => async (req, res, next) => {
  try {
    const result = await controller(req, res);
    if (result instanceof Promise) {
      result.catch(next);
    }
    if (result instanceof AppError) {
      throw result;
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = error_handler;
