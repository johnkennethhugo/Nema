const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get(     '/',            TaskController.getAllTasks);
router.get(     '/:id',         TaskController.getTaskById);
router.get(     '/user/:id',    TaskController.getTaskByEmployeeId);
router.get(     '/client/:id',  TaskController.getTaskByClientId);
router.get(     '/service/:id', TaskController.getTaskByServiceId);
router.post(    '/',            TaskController.createTask);
router.put(     '/:id',         TaskController.updateTask);
router.delete(  '/:id',         TaskController.deleteTask);

module.exports = router;