'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ducks = sequelize.define('Ducks', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ducks.associate = function(models) {
    // associations can be defined here
  };
  return Ducks;
};