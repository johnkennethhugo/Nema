const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.get(     '/',            EmployeeController.getAllEmployees);
router.get(     '/:id',         EmployeeController.getEmployeeById);
router.get(     '/role/:id',    EmployeeController.getEmployeeByRole);
router.post(    '/',            EmployeeController.createEmployee);
router.put(     '/:id',         EmployeeController.updateEmployee);
router.delete(  '/:id',         EmployeeController.deleteEmployee);

module.exports = router;