const mysql = require('mysql');
const config = require('../config/dbConfig');

const db = mysql.createConnection(config.database);
const table = config.database.database+'.INTEMP';

db.connect((err) => {
  if (err){ throw err;}
  else {console.log('Connected to the employee database')}
});

module.exports = {
  getAllEmployees: (callback) => {
    db.query('SELECT * FROM '+ table, callback);
  },

  getEmployeeById: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE EmployeeID = ?', [id], callback);
  },
  
  getEmployeeByRole: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE Role = ?', [id], callback);
  },

  createEmployee: (employeeData, callback) => {
    db.query('INSERT INTO '+ table +' SET ?', employeeData, callback);
  },

  updateEmployee: (id, updatedData, callback) => {
    db.query('UPDATE '+ table +' SET ? WHERE EmployeeID = ?', [updatedData, id], callback);
  },

  deleteEmployee: (id, callback) => {
    db.query('DELETE FROM '+ table +' WHERE EmployeeID = ?', [id], callback);
  },
};