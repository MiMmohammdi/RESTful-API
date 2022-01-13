const mySQL = require("../../models").mysqlDB;
const User = mySQL.users;
const Op = mySQL.Sequelize.Op;

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
      fullName: req.body.name,
      city: req.body.city,
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
    let user = await User.findByPk(id);
    // Send data
    res.status(202).send({
      success: true,
      message: `find User with id=${id}.`,
      user,
    });
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
    let user = await User.update(req.body, {
      where: { id: id },
    });
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
