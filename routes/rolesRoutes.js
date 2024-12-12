const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

router.post('/createRole', rolesController.createRole);
router.get('/getAllRoles', rolesController.getAllRoles);
router.put('/updateRole/:id', rolesController.updateRole);
router.delete('/deleteRole/:id', rolesController.deleteRole);

module.exports = router;