const { jwtService } = require("../services");
module.exports = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).send({
      status: "Error",
      statusCode: 401,
      message: "You are not authorization.",
    });
  }

  const token = jwtService.verify(req.headers.authorization);

  if (!token) {
    return res.status(401).send({
      status: "Error",
      statusCode: 401,
      message: "You are not authorization.",
    });
  }
  next();
};
