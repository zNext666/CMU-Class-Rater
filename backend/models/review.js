'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user: DataTypes.STRING,
    rate: DataTypes.DOUBLE,
    comment: DataTypes.STRING,
    course_no: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Course);
  };
  return Review;
};