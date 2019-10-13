'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      user: 'Pengine',
      rate: 5,
      course_no: 261361,
      comment: 'Good course!!',   
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user: 'Frame',
      rate: 4.5,
      course_no: 269340,
      comment: 'Good teacher!!',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
