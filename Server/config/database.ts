const Sequelize = require('sequelize');

const student = require('../app/models/student');
const admin = require('../app/models/admin');
const cord = require('../app/models/cord');
const qadder = require('../app/models/qadder');

const sequelize:any = new Sequelize.Sequelize(String(process.env.DB_NAME),String(process.env.DB_USER),String(process.env.DB_PASS), {
  host: String(process.env.DB_HOST),
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

const Models:Map<string,any> = new Map([
  ['StudentModel',student.construct(sequelize)],
  ['AdminModel', admin.construct(sequelize)],
  ['CordModel', cord.construct(sequelize)],
  ['QadderModel', qadder.construct(sequelize)],
]);

Models.forEach((value,key) => {
  value.sync({force:false});
});

const refresh = () => {
  Models.forEach((value,key) => {
    value.sync({force:true});
  });
}


exports.sequelize = sequelize;
exports.Models = Models;
