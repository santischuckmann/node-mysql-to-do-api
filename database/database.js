const { Sequelize } = require('sequelize');
const { database } = require('../config');
const TaskModel = require('../models/Task')

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password, {
    host: database.host,
    dialect : "mysql"
  }
);


const Task = TaskModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
  console.log('Estan sincronizadas las tablas')
})

module.exports = {
  sequelize,
  Task
} 
