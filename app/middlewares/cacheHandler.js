const { cachingService } = require("../services");

module.exports = async (req, res, next) => {
  const id = req.params.id;
  try {
    // Check redis database
    let user = await cachingService.get(id);
    // If cached return
    if (user) {
      res.status(202).send({
        success: true,
        message: `find User with id=${id}.`,
        user: JSON.parse(user),
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error :>> ", error);
  }
};
