'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [{
      user_id: 1,
      review_id: 1,
      op: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      review_id: 2,
      op: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Likes', null, {});
  }
};
