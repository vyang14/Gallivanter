const User = require('./Users');
const Trip = require('./Trip');

// A user can have many trips
User.hasMany(Trip, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Trip };