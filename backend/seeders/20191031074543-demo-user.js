'use strict';

const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Anonymous',
      email: 'annonymous@gmail.com',
      password: bcrypt.hashSync('abcd', saltRounds),
      role: '{"role":["admin"]}',  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'decade65',
      email: 'tunesudro@hotmail.com',
      password: bcrypt.hashSync('decade66', saltRounds),
      role: '{"role":["admin"]}',   
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'test',
      email: 'test@gmail.com',
      password: bcrypt.hashSync('1234', saltRounds),
      role: '{"role":["admin"]}',   
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
  ,

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
