const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./users');

class UserRequest extends Model {}

UserRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    numpassenger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    StartingLoc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "e"
    },
    EndingLoc: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "e"
    },
    TransportMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "e"
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserRequest',
  }
);

module.exports = UserRequest;
