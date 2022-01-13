// Models
const mongo = require("../../models").mongoDB;
const MongoUser = mongo.users;
// Services
const { sign, verify } = require("../../services/jwt");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find request user
    const user = await MongoUser.findOne({ username, password });

    if (!user) {
      return res.status(404).send({
        status: "Error",
        statusCode: 404,
        message: "This user not SingUp",
      });
    }
    // Verify user signup
    const token = verify({ id: user._id });
    return res.status(404).send({
      status: "success",
      statusCode: 200,
      token,
    });
  } catch (err) {
    // Create user faild
    res.status(408).send({
      success: false,
      message: "This user not SingUp",
    });
  }
};
