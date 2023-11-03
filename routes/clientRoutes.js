const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/customerController');

router.get(     '/',            ClientController.getAllClients);
router.get(     '/:id',         ClientController.getClientById);
router.get(     '/user/:id',    ClientController.getClientByEmployeeId);
router.post(    '/',            ClientController.createClient);
router.put(     '/:id',         ClientController.updateClient);
router.delete(  '/:id',         ClientController.deleteClient);

module.exports = router;