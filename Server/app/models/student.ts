import * as Sequelize from 'sequelize';

exports.construct = function (sequelize:any) {
  return sequelize.define('student', {
    username: Sequelize.STRING,
    dob: Sequelize.DATE,
  });
}
