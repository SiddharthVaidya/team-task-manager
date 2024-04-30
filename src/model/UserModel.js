const { DataTypes } = require("sequelize");
const {sq} = require("../config/db");
const Teams = require("./TeamModel");
const Team_User = require("./TeamUserModel");


const User = sq.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

User.belongsToMany(Teams, { through: Team_User });


User.sync().then(()=>{
  console.log("DB in sync");
})

module.exports = User;
