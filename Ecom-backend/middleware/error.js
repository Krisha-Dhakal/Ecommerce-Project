const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Mongoose Bad object id
  if (err.name === "CastError") {
    const message = `Resource not found with id ${err.value}`;
    error = new ErrorResponse(message, 404);

    return res.status(error.statusCode).json({
      success: false,
      error: error.message,
    });
  }

  //Mongoose duplicate key
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  //Mongoose Vlaidation error
  if (err.name === "ValidatorError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
