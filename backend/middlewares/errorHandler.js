const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Server Error";
  res.status(statusCode).send({ message: message });
};

export default errorHandler;
