const { DataTypes } = require("sequelize");
const { sq } = require("../config/db");
const User = require("./UserModel");
const Team_User = require("./TeamUserModel");

const Teams = sq.define("teams", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    teamName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

//Teams.belongsToMany(User, {through: Team_User});

Teams.sync().then(() => {
  console.log("DB in sync");
});


module.exports = Teams;