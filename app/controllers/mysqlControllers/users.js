const { cachingService } = require("../../services");
const { mysqlDB } = require("../../models");
const bcrypt = require("bcryptjs");
const Op = mysqlDB.Sequelize.Op;
const User = mysqlDB.users;

const create = async (req, res) => {
  // Data validation
  if (!req.body.name || !req.body.city) {
    res.status(422).send({
      message: "Name or City can not be empty!",
    });
    return;
  }

  try {
    // Create new user
    const user = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      name: req.body.name,
      age: req.body.age ? req.body.age : null,
    };

    // Save new user in database
    await User.create(user);

    res.status(201).send({
      success: true,
      message: "New user created.",
      user,
    });
  } catch (err) {
    // Create user faild
    res.status(408).send({
      success: false,
      message: "Cannot create new user!",
    });
  }
};

const findAll = async (req, res) => {
  // To find users with specific names
  const name = req.query.name;
  let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  try {
    // Received user list
    let usersList = await User.findAll({ where: condition });
    // Send data
    res.status(202).send({
      success: true,
      message: "User list received successfully.",
      usersList,
    });
  } catch (error) {
    res.status(408).send({
      success: false,
      message: "Failed to get user list.",
    });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    // Received user data
    const user = await User.findByPk(id);
    if (user) {
      let result = await cachingService.set(id, user.dataValues);

      // Send data
      res.status(202).send({
        success: true,
        message: `find User with id=${id}.`,
        user: user.dataValues,
      });
    } else {
      res.status(408).send({
        success: false,
        message: `Cannot find User with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(408).send({
      success: false,
      message: `Cannot find User with id=${id}.`,
    });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  try {
    // Received user data
    let user = await User.update(
      {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        name: req.body.name,
        age: req.body.age ? req.body.age : null,
      },
      {
        where: { id: id },
      }
    );
    // Send data
    res.status(200).send({
      success: true,
      message: "User was updated successfully.",
      user,
    });
  } catch (error) {
    res.status(408).send({
      success: false,
      message: `Cannot update User with id=${id}.`,
    });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Delete user with this ID
    await User.destroy({
      where: { id: id },
    });

    // Send data
    res.status(200).send({
      success: true,
      message: "User was deleted successfully.",
    });
  } catch (error) {
    res.status(408).send({
      success: false,
      message: `Cannot delete User with id=${id}.`,
    });
  }
};

const deleteAll = async (req, res) => {
  try {
    // Delete all user
    let num = await User.destroy({
      where: {},
      truncate: false,
    });

    // Send data
    res.status(200).send({
      success: true,
      num,
      message: `${data.deletedCount} User were deleted successfully!`,
    });
  } catch (error) {
    res.status(408).send({
      success: false,
      message: `Cannot delete all User.`,
    });
  }
};

module.exports = { create, findAll, findOne, update, deleteUser, deleteAll };
