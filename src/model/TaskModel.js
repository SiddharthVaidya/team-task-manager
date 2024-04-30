const {DataTypes}  = require('sequelize')
const { sq } = require("../config/db");

const Task = sq.define('tasks', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending"
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: true
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    assignedTo: {
        type: DataTypes.UUID,
        allowNull: true
    },
    team: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

//Task.hasMany(Comments)

Task.sync().then(()=>{
    console.log("Db in sync")
})

module.exports = Task