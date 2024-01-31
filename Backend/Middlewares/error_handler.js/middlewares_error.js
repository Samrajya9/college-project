const middleware_error = (err, rep, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || `Internal Server Error`;
  res.status(err.statuscode).json([{
    resType:"Error",
    message: err.message,
  }]);
  console.error(err);
};

module.exports = middleware_error;
