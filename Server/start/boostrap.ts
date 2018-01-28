const Database = require("../config/database");

global.Models = Database.Models;

global.Database = {
  sequelize : Database.sequalize,
  refresh : Database.refresh,
}

exports.data = Database;
