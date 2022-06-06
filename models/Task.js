module.exports = (sequelize, type) => {
  return sequelize.define('Task', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
     name: {
       type: type.STRING,
       allowNull: false
     },
     isDone : {
       type: type.BOOLEAN,
       defaultValue: false
     }
  })
}
