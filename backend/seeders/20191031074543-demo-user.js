'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Anonymous',
      email: 'annonymous@gmail.com',
      password: 'abcd',
      role: 'admin',  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'decade65',
      email: 'tunesudro@hotmail.com',
      password: 'decade66',
      role: 'admin',   
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'test',
      email: 'test@gmail.com',
      password: '1234',
      role: 'admin',   
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
  ,

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
