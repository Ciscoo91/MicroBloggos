const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY

module.exports = class authUtils {

    encryptPassword(password){
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt);
    }

    compare(password, hashedPassword){
        return bcrypt.compareSync(password, hashedPassword)
    }

    verify(token){
        return jwt.verify(token, secretKey)
    }

    generateToken(payload){
        return jwt.sign(payload, secretKey, {
            expiresIn: 360000
        })
    }
}