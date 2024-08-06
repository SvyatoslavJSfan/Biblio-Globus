'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Book, Order, Cart }) {
      this.hasMany(Order, {
        foreignKey: 'user_id'
      })

      this.belongsToMany(Book, { 
        foreignKey: 'user_id',
        through: 'Comments',
        as: 'books'
      })

      this.hasOne(Cart, { 
        foreignKey: 'user_id'
      })

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};