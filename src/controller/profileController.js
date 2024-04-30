const User = require('../model/UserModel')

const getProfile = async (req, res) =>{
    let userId = req.params.id;
    let loggedInUser = req.body.auth.id;
    if(userId != loggedInUser){
        return res.status(401).json({message: "unauthorised"});
    }
    let userProfile = await User.findOne({where: {id: userId}});
    userProfile = userProfile.toJSON();
    return res.status(200).json({profile: userProfile})
}

module.exports = {getProfile}