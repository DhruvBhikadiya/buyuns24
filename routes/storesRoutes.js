const express = require('express');
const router = express.Router();
const StoresController = require('../controllers/storesController');

router.post('/createStore', StoresController.createStore);
router.get('/getAllStores', StoresController.getAllStores);
router.put('/updateStore/:id', StoresController.updateStore);
router.delete('/deleteStore/:id', StoresController.deleteStore);

module.exports = router;