const express = require('express');
const router = express.Router();
const ServicesController = require('../controllers/servicesController');

router.post('/createService', ServicesController.createService);
router.get('/getAllServices', ServicesController.getAllServices);
router.put('/updateService/:id', ServicesController.updateService);
router.delete('/deleteService/:id', ServicesController.deleteService);

module.exports = router;