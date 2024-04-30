const jwt = require("jsonwebtoken")
require("dotenv").config();

class AuthJWT{
    static generateToken(body){
        return jwt.sign(
          { email: body.email, id: body.id },
          process.env.API_AUTH
        );
    }
    static verifyJWT(token){
        return jwt.verify(token, process.env.API_AUTH);
    }
    
}

module.exports = AuthJWT;