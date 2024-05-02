const express = require('express');
const router = express.Router();
const controller = require('../controllers/authentication.controller'); // replace with your controller file path

// Login routes
router.get('/admin/login', controller.getAdminLoginPage);
router.get('/teacher/login', controller.getTeacherLoginPage);
router.get('/student/login', controller.getStudentLoginPage);

// Sign up routes
router.get('/admin/signup', controller.getAdminSignUpPage);
router.get('/teacher/signup', controller.getTeacherSignUpPage);
router.get('/student/signup', controller.getStudentSignUpPage);

router.post('/user/signup', controller.signup);
router.post('/user/login', controller.login);

module.exports = router;
