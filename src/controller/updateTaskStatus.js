const Task = require("../model/TaskModel");


const updateTaskStatus = async(req, res) =>{
    let taskId = req.params.taskId;
    let task = await Task.findOne({where: {id: taskId}})
    if(!task){
        return res.status(404).json({message: "Task not found"})
    }
    task.status = req.body.status
    await task.save({fields: ['status']}).catch((err) =>{
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    })
    return res.status(201).json({message: "Task updated successfully"})
}

module.exports = updateTaskStatus;