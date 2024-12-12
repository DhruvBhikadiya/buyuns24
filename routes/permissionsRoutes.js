const express = require('express');
const router = express.Router();
const PermissionsController = require('../controllers/permissionsController');

router.post('/createPermission', PermissionsController.createPermission);
router.get('/getAllPermissions', PermissionsController.getAllPermissions);
router.get('/getPermissionsByRole/:roleId', PermissionsController.getPermissionsByRole);
router.put('/updatePermissionsByRole/:roleid', PermissionsController.updatePermissionByRole);
router.put('/updatePermission/:id', PermissionsController.updatePermission);
router.delete('/deletePermission/:id', PermissionsController.deletePermission);

module.exports = router;
