const Comment = require("../model/CommentModel");
const {v4} = require('uuid')

const commentController = async(req, res) => {
    if(!req.body){
        return res.status(400).json({message: "Bad Request"})
    }
    let body = req.body;
    await Comment.create({
        id: v4(),
        taskId: req.params.taskId,
        content: body.content,
        authorId: body.auth.id
    }).catch((err)=>{
        console.log(err)
        return res.status(500).json({message: "Internal Server Error"})
    })
    return res.status(201).json({message: "comment published"})
}

module.exports = commentController