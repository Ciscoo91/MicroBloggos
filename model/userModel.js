const {sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(245),
        allowNull: false
    },
    avatar_url: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports.User = User;