const TaskModel = require('../models/taskModel');

module.exports = {
  getAllTasks: (req, res) => {
    TaskModel.getAllTasks((err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  },

  getTaskById: (req, res) => {
    const id = req.params.id;
    TaskModel.getTaskById(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result[0]);
    });
  },

  getTaskByEmployeeId: (req, res) => {
    const id = req.params.id;
    TaskModel.getTaskByEmployeeId(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result);
    });
  },

  getTaskByClientId: (req, res) => {
    const id = req.params.id;
    TaskModel.getTaskByClientId(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result);
    });
  },

  getTaskByServiceId: (req, res) => {
    const id = req.params.id;
    TaskModel.getTaskByServiceId(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(result);
    });
  },

  createTask: (req, res) => {
    const taskData = req.body;
    TaskModel.createTask(taskData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json(result);
    });
  },

  updateTask: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    TaskModel.updateTask(id, updatedData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task updated successfully' });
    });
  },

  deleteTask: (req, res) => {
    const id = req.params.id;
    TaskModel.deleteTask(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted successfully' });
    });
  },
};