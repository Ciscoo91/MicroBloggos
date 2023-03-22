const { Sequelize } = require('sequelize');
const config = require('./config')()
// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.POSTGRE_TEST_URI, {
    dialect: "postgresql"
})

async function connectDB(){
    try {
        await sequelize.authenticate()
        console.log("Connection has been established successfully.")
    }catch(err){
        console.error(`Unable to connect to the database: ${err}`)
    }
}

module.exports = {
    sequelize,
    Sequelize,
    connectDB
}