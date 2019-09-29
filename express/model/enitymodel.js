const { Sequelize, Model, DataTypes } = require('sequelize');

const hostname = "127.0.0.1";
const username = "root";
const password = "";

const sequelize = new Sequelize(hostname, username, password, {
    dialect: 'mariadb',
    dialectOptions: {connectTimeout: 1000} // mariadb connector option
  })


class User extends Model{
    
}

class Course extends Model{

}

class Review extends Model{

}
