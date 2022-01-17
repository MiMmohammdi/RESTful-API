const bcrypt = require("bcryptjs");

// Models
const { mongoDB } = require("../../models");
const MongoUser = mongoDB.users;

// Services
const { generateAccessTokn, verify } = require("../../services/jwt");

const signUp = async (req, res) => {
  // Data validation
  if (!req.body.username || !req.body.password) {
    res.status(422).send({
      message: "Username and Password can not be empty!",
    });
    return;
  }
  try {
    let user = await MongoUser.findOne({ username: req.body.username });

    if (user) {
      let userData = { username: user.username, password: user.password };
      const token = generateAccessTokn(userData);
      return res.status(200).send({
        status: "New user created.",
        statusCode: 200,
        token,
      });
    } else {
      // Create new user
      const user = new MongoUser({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
        name: req.body.name,
        age: req.body.age ? req.body.age : null,
      });

      // Save new user in database
      await user.save();

      let userData = { username: user.username, email: user.password };
      const token = generateAccessTokn(userData);
      return res.status(200).send({
        status: "New user created.",
        statusCode: 200,
        token,
      });
    }
  } catch (error) {
    return res.status(408).send({
      status: "Request timeout!",
      statusCode: 408,
    });
  }
};

const signIn = async (req, res) => {
  let token = req.headers["authorization"];
  if (!token) {
    res.status(401).send({
      success: false,
      message: "Token not exist",
    });
  } else {
    try {
      let user = await MongoUser.findOne({ username: req.body.username });

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          status: "Invalid Password",
          statusCode: 401,
        });
      } else {
        // Verify user sign in
        const veryfyData = verify(token);
        return res.status(200).send({
          status: "success",
          statusCode: 200,
          veryfyData,
        });
      }
    } catch (err) {
      // Create user faild
      res.status(408).send({
        success: false,
        message: "This user not SingUp",
      });
    }
  }
};

module.exports = { signUp, signIn };
