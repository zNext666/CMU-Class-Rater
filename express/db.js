const Sequelize = require('sequelize')
/* loading the models */
var fs = require('fs')
var path = require('path')

//const Model = Sequelize.Model

const hostname = '127.0.0.1'
const database = 'cmuclassrater'
const username = 'root'
const password = 'alonealoha5'

// connect database
const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  dialect: 'mariadb',
  dialectOptions: {connectTimeout: 1000},
  define: {
    // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
    // This was true by default, but now is false by default
    timestamps: true
  }

});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  });

var models = {};
fs.readdirSync('model/').forEach(function(filename) {
  var model = {};
  model.path = path.join(__dirname, 'model/', filename)
  model.name = filename.replace(/\.[^/.]+$/, "");
  model.resource = sequelize.import(model.path);
  // model.service = epilogue.resource({model: model.resource});
  models[model.name] = model;	
});
  

// Model
/*
class User extends Model {}
User.init({
  username: {
    type: Sequelize.DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
      type: Sequelize.DataTypes.STRING(1024),
      allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: true
})


class Course extends Model {}
Course.init({
    course_no: {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'course',
    timestamps: true
})

class Section extends Model {}
Section.init({
    sec_no :{
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'section',
    timestamps: true
})

class Teacher extends Model {}
Teacher.init({
    name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    }
},{
    sequelize,
    modelName: 'teacher',
    timestamps: true
})

class Review extends Model {}
Review.init({
    rate: {
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    },
    commend: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'review',
    timestamps: true
})
*/

// Associations

/*
User.hasMany(Review)
Review.belongsTo(User)

Course.hasMany(Review)
Review.belongsTo(Course)

Course.hasMany(Section)
Section.belongsTo(Course)

Section.hasMany(Teacher)
Teacher.hasMany(Section)
*/
module.exports = models