const {DataTypes} = require('sequelize')
const {sq} = require('../config/db')
const Task = require('./TaskModel')
const User = require('./UserModel')

const Comment = sq.define('comments', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    taskId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Task,
            key: "id"
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    }
})

Task.hasMany(Comment)

Comment.sync().then(() =>{
    console.log('DB in sync')
}).catch((err) =>{
    console.log(err)
})

module.exports = Comment