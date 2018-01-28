
import * as Sequelize from 'sequelize';

exports.construct = function (sequelize:any) {
  return sequelize.define('cord', {
    username: Sequelize.STRING,
    dob: Sequelize.DATE,
  });
}
