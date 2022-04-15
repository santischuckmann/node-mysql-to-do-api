const express = require ('express');
const app = express();
require('express-async-errors')
const { sequelize } = require('./database/database')

const port = process.env.PORT || 3001;

app.use(express.json());

const apiRouter = require('./routes/api')
app.use('/api', apiRouter);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.listen(port, console.log(`server is listening on port ${port}`))

  sequelize.authenticate().then(() => {
    console.log("Nos hemos conectado a la base de datos")
  }).catch (error => console.log('Se produjo un error:',error))