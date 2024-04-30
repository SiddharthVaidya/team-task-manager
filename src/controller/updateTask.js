const Task = require("../model/TaskModel")
const Validator = require("../utils/Validator")

const updateTaskController = async(req, res) =>{
    if(!req.body || !req.params.id){
        return res.status(400).json({message: "Bad request"})
    }
    let id = await Task.findOne({where: {id: req.params.id}})
    let validity = Validator.ValidateTaskRequest(req.body)
    if(!id){
        return res.status(404).json({message: "Task Not Found"})
    }
    let body = req.body;
    await Task.upsert({
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      status: body.status == null || !body.status ? "Pending" : body.status,
      deadline: body.deadline,
      createdBy: body.createdBy,
      assignedTo: body.assignedTo,
      team: body.team,
    }).catch((err) =>{
        console.log(err)
        return res.status(500).json({message: "Internal Server Error"})
    })
    return res.status(201).json({message: "Task updated successfully"})
}

module.exports = updateTaskController