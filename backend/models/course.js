'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    course_no: DataTypes.INTEGER,
    name: DataTypes.STRING,
    section: DataTypes.INTEGER,
    teacher: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Review);
  };
  return Course;
};