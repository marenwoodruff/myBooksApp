'use strict';
module.exports = (sequelize, DataTypes) => {
  var book = sequelize.define('book', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  book.associate = function(models) {
    // associations can be defined here
    book.belongsTo(models.user, {foreignKey : 'userId'});
  };
  return book;
};
