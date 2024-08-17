"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");
const {ServerConfig} =  require('../config/server-config');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate(function encrypt(user) {
    // this is the plane Js Object which is used to create a new record in the mysql table
    console.log("User Password Before Encrypt", user);
    const encryptedPassword = bcrypt.hashSync(user.password, +ServerConfig.SALT_ROUND);
    user.password = encryptedPassword;
    console.log("User Password After Encrypt", user);

  });

  return User;
};
