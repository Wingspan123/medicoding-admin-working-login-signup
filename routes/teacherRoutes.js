const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// router.get('/teachers', teacherController.getAllTeachers);
// router.post('/teachers', teacherController.createTeacher);
// router.get('/teachers/:id', teacherController.getTeacherById);
// router.put('/teachers/:id', teacherController.updateTeacher);
// router.delete('/teachers/:id', teacherController.deleteTeacher);

router.get('/screen/get-dashboard', teacherController.getTeachersDashboardScreen);

module.exports = router;
