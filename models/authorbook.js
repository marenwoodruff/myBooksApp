'use strict';
module.exports = (sequelize, DataTypes) => {
  var authorBook = sequelize.define('authorBook', {
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  authorBook.associate = function(models) {
    // associations can be defined here
  };
  return authorBook;
};