const authService = require("../services/authService")

module.exports = {

    register: async function(req, res){

         try {
            const { username, password, confirmPassword, email } = req.body;
            const user = userService.checkIfUserExists(username);

            if (user) {
                res.status(403).send({ error: `User with the username ${username} already exists` });
                return;
            }

            if (password !== confirmPassword) {
                res.status(403).send({ error: `Both passwords must match!` });
                return;
            }

            const hash = authService.encryptPassword(password);
            userService
                .createUser(username, hash, email)
                .then(() => {
                    res.status(200).send({ message: "User created successfully" });
                })
                .catch(error => {
                    throw error;
                });
        } catch (error) {
            res.status(500).send({ error: "Unexpected error" });
        }

    },

    login: function(req, res){
        
    }

}