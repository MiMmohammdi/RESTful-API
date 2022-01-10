const mySQL = require("../models");
const mongo = require("../models/mongo");
const User = mySQL.users;
const MongoUser = mongo.users;
const Op = mySQL.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.city) {
    res.status(400).send({
      message: "Name or City can not be empty!",
    });
    return;
  }

  if (req.params.db == "sql") {
    const user = {
      fullName: req.body.name,
      city: req.body.city,
      age: req.body.age ? req.body.age : null,
    };
    User.create(user)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    const user = new MongoUser({
      fullName: req.body.name,
      city: req.body.city,
      age: req.body.age ? req.body.age : null,
    });
    user
      .save(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  if (req.params.db == "sql") {
    User.findAll({ where: condition })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    MongoUser.find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  if (req.params.db == "sql") {
    User.findByPk(id)
      .then((result) => {
        if (result) {
          res.send(result);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    MongoUser.findById(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (req.params.db == "sql") {
    User.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    MongoUser.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (data) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};

exports.delete = (req, res) => {
  const id = req.params.id;

  if (req.params.db == "sql") {
    User.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    MongoUser.findByIdAndRemove(id)
      .then((data) => {
        if (data) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};

exports.deleteAll = (req, res) => {
  if (req.params.db == "sql") {
    User.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} User were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else if (req.params.db == "no-sql") {
    MongoUser.deleteMany({})
      .then((data) => {
        res.send({
          message: `${data.deletedCount} User were deleted successfully!`,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } else {
    res.status(404).send({
      message: "Your database not found",
    });
  }
};
