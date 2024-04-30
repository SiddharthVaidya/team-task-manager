const Validator = require("../utils/Validator")
const Task = require('../model/TaskModel');
const { v4 } = require("uuid");

const newTaskController = async (req, res) =>{
    let validity = Validator.ValidateTaskRequest(req.body);
    if(!validity){
        return res.status(400).json({message: "Bad Request"})
    }
    let body = req.body;
    await Task.create({
        id: v4(),
        title: body.title,
        description: body.description,
        status: body.status == null || !body.status ? "Pending" : body.status,
        deadline: body.deadline,
        createdBy: body.createdBy,
        assignedTo: body.assignedTo,
        team: body.team
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({message: "Internal Server Error"})
    })
    return res.status(201).json({message: `Task created successfully`});
}

module.exports = newTaskController;