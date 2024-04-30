const Task = require("../model/TaskModel");
const User = require("../model/UserModel");


const updateTaskAssignment = async(req, res) =>{
    if(!req.body){
        return res.status(400).json({message: "Bad Request"})
    }
    let taskId = req.params.taskId;
    if(!taskId){
        return res.status(404).json({message: "Invalid Task ID"})
    }
    let task = await Task.findOne({where: {id: taskId}})
    if(!task){
        return res.status(404).json({ message: "Invalid Task ID" });
    }
    let newAssignee = await User.findOne({where: {id: req.body.assignTo}})
    if(!newAssignee){
        return res.status(404).json({ message: "User Not Found with given ID" });
    }
    task.assignedTo = newAssignee.id
    await task.update({assignedTo: newAssignee.id}).catch((err)=>{
        console.log(err)
        return res.status(500).json({ message: "Internal Server Error" });
    })
    return res.status(201).json({ message: `Task ${task.id} was successfully assigned to ${task.assignedTo}`})
}

module.exports = updateTaskAssignment;