const express = require('express');
const router = express.Router();

const apiTasksRouter = require('./api/tasks')

router.use('/tasks', apiTasksRouter)

module.exports = router;