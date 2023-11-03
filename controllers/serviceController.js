const ServiceModel = require('../models/serviceModel');

module.exports = {
  getAllServices: (req, res) => {
    ServiceModel.getAllServices((err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  },

  getServiceById: (req, res) => {
    const id = req.params.id;
    ServiceModel.getServiceById(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (!result[0]) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json(result[0]);
    });
  },

  createService: (req, res) => {
    const serviceData = req.body;
    ServiceModel.createService(serviceData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(201).json(result);
    });
  },

  updateService: (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    ServiceModel.updateService(id, updatedData, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json({ message: 'Service updated successfully' });
    });
  },

  deleteService: (req, res) => {
    const id = req.params.id;
    ServiceModel.deleteService(id, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Service not found' });
      }
      res.json({ message: 'Service deleted successfully' });
    });
  },
};