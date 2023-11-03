const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.database);
const table = config.database.database+'.ENTTAS';

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the task database');
});

module.exports = {
  getAllTasks: (callback) => {
    db.query('SELECT * FROM '+ table, callback);
  },

  getTaskById: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE TaskID = ?', [id], callback);
  },

  getTaskByEmployeeId: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE EmployeeID = ?', [id], callback);
  },

  getTaskByClientId: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE ClientID = ?', [id], callback);
  },

  getTaskByServiceId: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE ServiceID = ?', [id], callback);
  },

  createTask: (taskData, callback) => {
    db.query('INSERT INTO '+ table +' SET ?', taskData, callback);
  },

  updateTask: (id, updatedData, callback) => {
    db.query('UPDATE '+ table +' SET ? WHERE TaskID = ?', [updatedData, id], callback);
  },

  deleteTask: (id, callback) => {
    db.query('DELETE FROM '+ table +' WHERE TaskID = ?', [id], callback);
  },
};