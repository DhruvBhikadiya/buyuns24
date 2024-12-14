const express = require('express');
const router = express.Router();
const CustomersController = require('../controllers/customersController');

router.post('/createCustomer', CustomersController.createCustomer);
router.get('/getAllCustomers', CustomersController.getAllCustomers);
router.post('/loginCustomer', CustomersController.loginCustomer);
router.put('/updateCustomer/:id', CustomersController.updateCustomer);
router.put('/updateCustomerStatus/:id', CustomersController.updateCustomerStatus);
router.delete('/deleteCustomer/:id', CustomersController.deleteCustomer);

module.exports = router;