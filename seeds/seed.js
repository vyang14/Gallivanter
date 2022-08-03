const sequelize = require("../config/connection");
const { User,UserRequest } = require("../models");

const userData = require("./userData.json");
const userrequestdata = require("./userrequestData.json");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await UserRequest.bulkCreate(userrequestdata, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
