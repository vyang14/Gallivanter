const User = require('./Users');
const Trip = require('./Trip');
const Reviews = require('./Reviews');
const UserRequest = require('./UserRequest');

UserRequest.hasOne(Trip, {
  foreignKey: 'UserRequest_id',
  onDelete: 'CASCADE',
});
// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(UserRequest, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Car side
Trip.hasMany(Reviews, {
    foreignKey: 'Trip_id',
    onDelete: 'CASCADE',
  });

module.exports = { User, UserRequest,Trip, Reviews };