'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      user_id: 2,
      rate: 5,
      comment: 'Good course!',
      course_no: 261361,  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      rate: 5,
      comment: 'Nice!',
      course_no: 269340,  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 1,
      rate: 3,
      comment: 'Ummmm!',
      course_no: 261361,  
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
