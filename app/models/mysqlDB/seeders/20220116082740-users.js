const seedData = require("./seedData.json");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", seedData, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
