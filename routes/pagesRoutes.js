const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/pagesController');

router.post('/createPage', PagesController.createPage);
router.get('/getAllPages', PagesController.getAllPages);
router.put('/updatePage/:id', PagesController.updatePage);
router.delete('/deletePage/:id', PagesController.deletePage);

module.exports = router;
