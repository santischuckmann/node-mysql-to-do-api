module.exports = (sequelize, type) => {
  return sequelize.define('Task', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
     name: {
       type: type.STRING,
     },
     isDone : {
       type: type.BOOLEAN,
       defaultValue: false
     }
  })
}


// have to create database table, read sequelize docs