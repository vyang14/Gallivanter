const User = require('./Users');
const Completedtrip = require('./Completedtrip');
const Reviews = require('./Reviews');
const UserRequest = require('./UserRequest');

Completedtrip.hasOne(UserRequest, {
  foreignKey: 'UserRequest_id',
  onDelete: 'CASCADE',
});

UserRequest.belongsTo(User, {
  foreignKey: 'User_id',
});

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(UserRequest, {
  foreignKey: 'driver_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Completedtrip.belongsTo(UserRequest, {
  foreignKey: 'driver_id',
});

module.exports = { User, UserRequest,Completedtrip,Reviews };