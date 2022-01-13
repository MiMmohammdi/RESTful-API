module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).send({
      status: "Nodt Found",
      statusCode: 404,
      message: "Not Found This Page!",
    });
  });
};
