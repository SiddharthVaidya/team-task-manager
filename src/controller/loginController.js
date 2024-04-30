const Validator = require('../utils/Validator')
const User = require('../model/UserModel')
const bcrypt = require('bcrypt')
const AuthJWT = require('../utils/AuthJWT')

const login = async (req, res) =>{
    let body = req.body;
    if(!Validator.validateLoginRequest(req.body).status){
        return res.status(400).json({message: "Bad Request"})
    }
    //find email and store id
    let retrievedUser = await User.findOne({where: {email: body.email}});
    if (!retrievedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    let hashedUserPassword = retrievedUser.dataValues["password"];
    let isPasswordCorrect = bcrypt.compareSync(body.password, hashedUserPassword)
    if(!isPasswordCorrect){
        return res.status(200).json({message: "Password incorrect"})
    }
    const token = AuthJWT.generateToken(retrievedUser);
    return res.status(200).json({message: "Login Successful", token: token});
    //generate jwt token and send
}

module.exports = login;