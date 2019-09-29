const express = require('express')
const Sequelize = require('sequelize');
const app = express()

const port = 8000;
const hostname = '127.0.0.1';
const database = 'cmuclassrater';
const username = 'root';
const password = 'alonealoha5';

// connect database
const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: 'mariadb',
  dialectOptions: {connectTimeout: 1000}
});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// import model
const User = sequelize.import( __dirname + "/model/user.js");
//const ReviewModel = require('./model/review');
//const CourseModel = require('./model/course');

// Sync
User.sync();

// run express
app.listen(port, () => console.log(`CMU-Class-Rater API listening on port ${port}!`))