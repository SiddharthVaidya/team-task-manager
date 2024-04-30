const jwt = require("jsonwebtoken")
require('dotenv').config()

const verifyJWT = (req, res, next) =>{
    if(!req.headers.authorization){
        return res.status(401).json({message: "Unauthorized"})
    }
    const body = jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_AUTH)
    req.body.auth = body;
    next();
}

module.exports = verifyJWT