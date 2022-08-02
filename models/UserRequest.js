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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
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
