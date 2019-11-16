'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.DOUBLE
      },
      comment: {
        type: Sequelize.TEXT
      },
      course_no: {
        type: Sequelize.STRING,
        references: {         // User belongsTo Company 1:1
          model: 'Courses',
          key: 'course_no'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'Users',
          key: 'id'
        }
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
    return queryInterface.dropTable('Reviews');
  }
};