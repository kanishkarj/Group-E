import * as Sequelize from 'sequelize';

exports.construct = function (sequelize:any) {
  return sequelize.define('qadder', {
    username: Sequelize.STRING,
    dob: Sequelize.DATE,
  });
}
