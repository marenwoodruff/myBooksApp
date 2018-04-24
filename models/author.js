'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    // associations can be defined here
  };
  return author;
};