const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./users');

class CompletedTrip extends Model {}

CompletedTrip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Locations: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Reviews: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CompletedTrip',
  }
);

module.exports = CompletedTrip;