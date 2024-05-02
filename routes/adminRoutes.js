const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admins', adminController.getAllAdmins);
router.post('/admins', adminController.createAdmin);
router.get('/admins/:id', adminController.getAdminById);
router.put('/admins/:id', adminController.updateAdmin);
router.delete('/admins/:id', adminController.deleteAdmin);

module.exports = router;
