'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    username: DataTypes.STRING,
    title: DataTypes.STRING,
    rate: DataTypes.DOUBLE,
    comment: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    course_no: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Course);
    Review.belongsTo(models.User);
    Review.hasMany(models.Like);
  };
  return Review;
};