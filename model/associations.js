const {Messages} = require('./messagesModel')
const {User} = require("./userModel")
const {Subscribe} = require('./subscribeModel')


module.exports = async function(sequelize){

    User.hasMany(Subscribe)
    Subscribe.belongsTo(User)

    User.hasMany(Messages)
    Messages.belongsTo(User)

    await sequelize.sync({ force: true , alter: true});
    console.log("All models were synchronized successfully.");
}