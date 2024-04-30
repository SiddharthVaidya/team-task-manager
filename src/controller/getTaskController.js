const { taskByStatus, taskByTitleOrDesc } = require("../services/TaskService");

const getAllTaskController = async(req, res) =>{
    let status = req.query.status;
    let title = req.query.title;
    let description = req.query.desc;
    if(!title && !description){
        let taskList = await taskByStatus(status, req.body.auth.id)
        if(!taskList){
            return res.status(404).json({message: "Task not found"})
        }
        return res.status(200).json({taskList: taskList});
    }
    else{
        let taskList = await taskByTitleOrDesc(title, description)
        if (!taskList) {
          return res.status(404).json({ message: "Task Not Found with these parameters" });
        }
        return res.status(200).json({taskList: taskList});
    }
}




module.exports = {getAllTaskController};