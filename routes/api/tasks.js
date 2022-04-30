const express = require('express')
const router = express.Router();

const { Task } = require ('../../database/database')

router.get('/', async (req,res) => {
  const tasks = await Task.findAll();
  res.status(200).json({ tasks })
})

router.get('/:id', async (req,res) => {
  const task = await Task.findOne({
    where : {
      id: req.params.id
    }
   })
   if (!task) {
     res.status(404).json();
   }
   res.status(200).json({ task });
})

router.post('/', async (req,res) => {
  const name = req.body;
  const task = await Task.create(name);
  res.status(200).json(task)
})

router.patch('/:id', async (req,res) => {
  const name = req.body.name;
  const task = await Task.update (
    {name: name, isDone:req.body.isDone}, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).send();
})

router.delete('/:id', async (req,res) => {
  const task = await Task.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).send();
})

module.exports = router;
