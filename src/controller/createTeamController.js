const Team_User = require('../model/TeamUserModel');
const TeamModel = require('../model/TeamModel');
const {v4: uuidv4, v4} = require("uuid")


const createteamController = async(req, res) => {
    if(!req.headers.admin || req.headers.admin == false){
        return res.status(403).json({message: "This operation is forbidden"})
    }
    await TeamModel.create({
        id: v4(),
        teamName: req.body.name,
        description: req.body.description
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"})
        }
    )
    return res.status(201).json({"message": "Team created successfully"})
}

module.exports = createteamController;