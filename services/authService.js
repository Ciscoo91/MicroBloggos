const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY

module.exports = class authService {

    constructor(userRepository){
        this.userRepository = userRepository
    }

    registerUser(userData){
        this.userRepository.createUser(userData)
    }

    loginUser(userData){
        this.userRepository.find
    }
}