'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    op: DataTypes.ENUM('0', '1', '2')
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User);
    Review.belongsTo(models.Review);
  };
  return Like;
};