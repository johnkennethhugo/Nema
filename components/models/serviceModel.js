const mysql = require('mysql');
const config = require('../config/dbConfig');

const db = mysql.createConnection(config.database);
const table = config.database.database+'.ENTSER';

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the service database');
});

module.exports = {
  getAllServices: (callback) => {
    db.query('SELECT * FROM '+ table, callback);
  },

  getServiceById: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE ServiceID = ?', [id], callback);
  },

  createService: (serviceData, callback) => {
    db.query('INSERT INTO '+ table +' SET ?', serviceData, callback);
  },

  updateService: (id, updatedData, callback) => {
    db.query('UPDATE '+ table +' SET ? WHERE ServiceID = ?', [updatedData, id], callback);
  },

  deleteService: (id, callback) => {
    db.query('DELETE FROM '+ table +' WHERE ServiceID = ?', [id], callback);
  },
};