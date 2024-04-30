const Teams = require("../model/TeamModel")
const Team_User = require("../model/TeamUserModel")
const User = require("../model/UserModel")
const {v4} = require("uuid")

const addTeamMemberController = async(req, res) =>{
    if(!req.body.userId || !req.body.teamId){
        return res.status(400).json({message: "Bad Request"})
    }
    let user = await User.findOne({where: {id: req.body.userId}})
    let team = await Teams.findOne({where: {id: req.body.teamId}})
    console.log(user)
    console.log(team)
    if(!user || !team){
        return res.status(404).json({message: "Team or User Not found" })
    }
    console.log(req.body)
    await Team_User.create({
        id: v4(),
        userId: user.id,
        teamId: team.id
    }).catch((err) =>{
        console.log(err)
        return res.status(500).json({message: "Internal Server Error"})
    })
    return res.status(201).json({message: `User ${user.name} added to Team ${team.teamName}`})
}

module.exports = addTeamMemberController