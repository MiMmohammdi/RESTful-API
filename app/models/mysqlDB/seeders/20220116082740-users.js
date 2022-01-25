const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []

    for (let index = 0; index < 3000; index++) {
      data.push({
        username: `username ${index}`,
        password: bcrypt.hashSync(`${index}`),
        name: `user ${index}`,
        age: `${index}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    return queryInterface.bulkInsert("users", data, {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
