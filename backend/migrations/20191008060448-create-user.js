'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      }
      ,
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      display_name:{
        type: Sequelize.STRING(500)
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.JSON
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
    return queryInterface.dropTable('Users');
  }
};