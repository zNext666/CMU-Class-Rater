const sequelize = require('sequelize');
const Model = sequelize.Model;
const DataTypes = sequelize.DataTypes;
class User extends Model{ }
User.init({
    id : {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(1024),
        allowNull : false
    }
}, { sequelize,
    modelName: "User" 
});


module.exports = User;