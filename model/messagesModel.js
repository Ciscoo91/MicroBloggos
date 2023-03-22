const {sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")


const Messages = sequelize.define('Messages', {
    content: {
        type: DataTypes.STRING(140),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE
    }
})

module.exports.Messages = Messages;