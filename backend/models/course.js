'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    course_no: {
      type:DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    section: DataTypes.INTEGER,
    teacher: DataTypes.STRING,
    description: DataTypes.STRING,
    view: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Review,{foreignKey: 'course_no'});
  };
  return Course;
};