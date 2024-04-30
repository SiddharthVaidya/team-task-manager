const Task = require('../model/TaskModel')
const { Op } = require("sequelize");

const taskByStatus = async(status, id) =>{
    if(!status){
        let taskList = await Task.findAll({where: {assignedTo: id}});
        return taskList;
    }
    else{
        let taskList = await Task.findAll({
          where: { assignedTo: id, status: status },
        })
        return taskList
    }
    return null;
}

const taskByTitleOrDesc = async(title, desc) =>{
    if(!title && !desc){
        let taskList = await Task.findAll({
          where: { assignedTo: req.body.auth.id }
        });
        return taskList;
    }
    if(!desc){
        let taskList = await Task.findAll({where: {title: {[Op.like]: `%${title}%`}}})
        return taskList;
    }
    if(!title){
        let taskList = await Task.findAll({
        where: { description: { [Op.like]: `%${desc}%` } },
        });
        return taskList
    }
    let taskList = await Task.findAll({
      where: {
        title: { [Op.like]: `%${title}%`},
        description: { [Op.like]: `%${desc}%`},
      },
    });
    return taskList;
}


module.exports = {taskByStatus, taskByTitleOrDesc}