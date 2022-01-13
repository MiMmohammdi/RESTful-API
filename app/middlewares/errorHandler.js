module.exports = (app) => {
  app.use((error, req, res, next) => {
    res.send({
      status: "Exception",
      statusCode: error.status || 500,
      message: "Request Timeout!",
      description: error.message,
    });
  });
};
