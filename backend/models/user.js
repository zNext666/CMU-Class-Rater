'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    display_name: DataTypes.STRING(500),
    uid: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING(1024),
    role: DataTypes.JSON
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review,{foreignKey: 'user_id'});
    User.hasMany(models.Like);
  };
  return User;
};