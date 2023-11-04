const ClientModel = require('../models/clientModel');

module.exports = {
  getAllClients: (req, res) => {
    ClientModel.getAllClients((err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  },

  getClientById: (req, res) => {
    const id = req.params.id;
    ClientModel.getClientById(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(result[0]);
    });
  },

  getClientByEmployeeId: (req, res) => {
    const id = req.params.id;
    ClientModel.getClientByEmployeeId(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json(result);
    });
  },

  createClient: (req, res) => {
    const clientData = req.body;
    ClientModel.createClient(clientData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json(result);
    });
  },

  updateClient: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    ClientModel.updateClient(id, updatedData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json({ message: 'Client updated successfully' });
    });
  },

  deleteClient: (req, res) => {
    const id = req.params.id;
    ClientModel.deleteClient(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Client not found' });
      }
      res.json({ message: 'Client deleted successfully' });
    });
  },
};