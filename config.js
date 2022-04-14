require('dotenv').config();

module.exports = {
  database: {
    username: "bfc3d3e61d68f0",
    password: process.env.DATABASE_PASSWORD,
    database: "heroku_f0a70063e0be342",
    host: "us-cdbr-east-05.cleardb.net"
  }
}
