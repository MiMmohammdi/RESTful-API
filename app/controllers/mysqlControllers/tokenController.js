// Models
const mySQL = require("../../models").mysqlDB;
const Op = mySQL.Sequelize.Op;
const User = mySQL.users;

// Services
const { sign, verify } = require("../../services/jwt");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find request user
    const user = await User.findByPk({
      where: { [Op.and]: [{ username }, { password }] },
    });

    if (!user) {
      return res.status(404).send({
        status: "Error",
        statusCode: 404,
        message: "This user not SingUp",
      });
    }
    // Verify user signup
    const token = verify({ id: user.id });
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
