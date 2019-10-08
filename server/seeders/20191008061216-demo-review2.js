'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      user: 'Pengine',
      rate: 5,
      comment: 'Good course!!',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user: 'Frame',
      rate: 4.5,
      comment: 'Good teacher!!',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
