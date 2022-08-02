const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./users');

class Reviews extends Model {}

Reviews.init(
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
    },
    StartingLoc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EndingLoc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TransportMethod: {
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Reviews;
