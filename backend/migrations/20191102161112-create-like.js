'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Users 
          model: 'Users',
          key: 'id'
        }
      },
      review_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Reviews 
          model: 'Reviews',
          key: 'id'
        }
      },
      op: {
        type: Sequelize.ENUM('0', '1','2')  // 0 : default, 1 : like, 2 : dislike
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};