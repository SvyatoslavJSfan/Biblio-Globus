'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Genre, User }) {
      this.belongsTo(Genre, { foreignKey: 'genre_id' })
      this.belongsToMany(User, { 
        foreignKey: 'book_id',
        through: 'Comments',
        as: 'users'
      })
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};