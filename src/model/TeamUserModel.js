const { DataTypes } = require("sequelize");
const { sq } = require("../config/db");
const Teams = require("./TeamModel");
const User = require("./UserModel");

const Team_User = sq.define("team_user", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "id",
    },
  },
  teamId: {
    type: DataTypes.UUID,
    references: {
      model: Teams,
      key: "id",
    }
  },
});


//User.belongsToMany(Teams, { through: Team_User });
//Teams.belongsToMany(User, { through: Team_User });

Team_User.sync().then(() => {
  console.log("DB in sync");
});

module.exports = Team_User;