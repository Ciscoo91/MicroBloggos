const {sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")


const Subscribe = sequelize.define('Subscribe', {
    follows: {
        type: DataTypes.INTEGER
    }
})

module.exports.Subscribe = Subscribe;