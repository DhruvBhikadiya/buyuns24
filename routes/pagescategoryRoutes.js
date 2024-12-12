const express = require('express');
const router = express.Router();
const PagesCategorysController = require('../controllers/pagescategoryController');

router.post('/createPagesCategory', PagesCategorysController.createPagecategory);
router.get('/getAllPagesCategory', PagesCategorysController.getAllPagecategorys);
router.put('/updatePagesCategory/:id', PagesCategorysController.updatePagecategory);
router.delete('/deletePagesCategory/:id', PagesCategorysController.deletePagecategory);

module.exports = router;
