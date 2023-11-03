const EmployeeModel = require('../models/employeeModel');

module.exports = {
  getAllEmployees: (req, res) => {
    EmployeeModel.getAllEmployees((err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  },

  getEmployeeById: (req, res) => {
    const id = req.params.id;
    EmployeeModel.getEmployeeById(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(result[0]);
    });
  },

  getEmployeeByRole: (req, res) => {
    const id = req.params.id;
    EmployeeModel.getEmployeeByRole(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(result);
    });
  },

  createEmployee: (req, res) => {
    const employeeData = req.body;
    EmployeeModel.createEmployee(employeeData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json(result);
    });
  },

  updateEmployee: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    EmployeeModel.updateEmployee(id, updatedData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json({ message: 'Employee updated successfully' });
    });
  },

  deleteEmployee: (req, res) => {
    const id = req.params.id;
    EmployeeModel.deleteEmployee(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json({ message: 'Employee deleted successfully' });
    });
  },
};