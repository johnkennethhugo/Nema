const mysql = require('mysql');
const config = require('../config');

const db = mysql.createConnection(config.database);
const table = config.database.database+'.EXTCLI';

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the customer database');
});

module.exports = {
  getAllClients: (callback) => {
    db.query('SELECT * FROM '+ table, callback);
  },

  getClientById: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE ClientID = ?', [id], callback);
  },

  getClientByEmployeeId: (id, callback) => {
    db.query('SELECT * FROM '+ table +' WHERE EmployeeID = ?', [id], callback);
  },

  createClient: (clientData, callback) => {
    db.query('INSERT INTO '+ table +' SET ?', clientData, callback);
  },

  updateClient: (id, updatedData, callback) => {
    db.query('UPDATE '+ table +' SET ? WHERE ClientID = ?', [updatedData, id], callback);
  },

  deleteClient: (id, callback) => {
    db.query('DELETE FROM '+ table +' WHERE ClientID = ?', [id], callback);
  },
};