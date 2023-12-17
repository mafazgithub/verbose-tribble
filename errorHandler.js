

module.exports = (err, req, res, next) => {
  console.error(err.message);

  const statusCode = err.status || 500;
  res.status(statusCode).json({ message: err.message, errors: err.errors });
};
