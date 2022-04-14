require('dotenv').config();

module.exports = {
  database: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "todolist",
    host: "localhost"
  }
}