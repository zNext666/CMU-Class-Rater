'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user: DataTypes.STRING,
    rate: DataTypes.DOUBLE,
    comment: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Course,{
      foreignKey: 'course_id',
      as: 'course_id'
    })
  };
  return Review;
};