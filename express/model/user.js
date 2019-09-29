module.exports = (sequelize, DataTypes) => {
    class User extends sequelize.Model { }
    User.init({
      username: DataTypes.STRING(100),
      password: DataTypes.STRING(1024)
    }, { sequelize,timestamps: true });
    return User;
}