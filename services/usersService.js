const userPersistence = require("../repositories/userMongoosePersistance");

function createUser(username, password, email) {
    return userPersistence.createUser({ username, password, email });
}

function checkIfUserExists(username) {
    return userPersistence.findByUsername(username);
}

module.exports = {
    createUser,
    checkIfUserExists
};




// module.exports = class usersService {

//     getUserByUsername(userRepository, username){
//         const user = userRepository.find(username)
//         return user;
//     }

//     getAllUsers(userRepository){
//         const users = userRepository.findAll()
//         return users;
//     }

//     getUserById(userRepository, id){
//         const user = userRepository.findById(id)
//         return user;
//     }

//     createUser(userRepository, payload){
        
//     }

//     deleteUserById(userRepository, id){
//         user = userRepository.delete(id)
//         return user;
//     }

//     upadateUser(userRepository, payload){
//         user = userRepository.update(payload)
//         return user;
//     }

// }