'use strict';
module.exports = (sequelize, DataTypes) => {
  var Duck = sequelize.define('Duck', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Duck.associate = function(models) {
    // associations can be defined here
  };
  return Duck;
};