const { Sequelize } = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(
  process.env.db,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    dialect: "mysql",
  }
); 

const testConnection = async() =>{
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

module.exports = {sq: sequelize, testConnection}