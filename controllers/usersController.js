const userService = require('../services/usersService')
const authService = require('../services/authService')
const usersService = require('../services/usersService')
const passwordUtils = require("../utils/passwordUtils");
const userPersistence = require("../repositories/userMongooseRepository");

module.exports = {
    getAllUsers : function(req, res){
        const users = usersService.getAllUsers()
        res.status(200).send({users: users})
    },

    createUser : function (req, res){
        
        try {
            const {username, password, confirmPassword, email} = req.body
            const user = userPersistence.findByUsername(username)
            
            if(user){
                res.status(403).send({error: `User with the username ${username} allready exists`})
                return;
            }

            if(password !== confirmPassword){
                res.status(403).send({error: `Both password must match !`})
                return;
            }

            const hash = authService.encryptPassword(password)
            const createdUser =  userService.createUser({username: username, password: hash, email: email})

            res.status(200).send({message: "User created successfully", user: createdUser})

        }catch(error){
            res.status(500).send({error: "Unexpected error"})
        }

    },
    updateUser: function (req, res){
        const { username, password, password_confirm, email } = req.body;
        const userId = req.params.id;

        if (passwordUtils.validatePassword(password, password_confirm)) {
            const hashedPassword = passwordUtils.hashPassword(password);
            const updateData = { username, email, password: hashedPassword };

            userPersistence
                .updateUser(userId, updateData)
                .then(user => {
                    res.send(user);
                })
                .catch(err => {
                    throw err;
                });
        }
    }
}
