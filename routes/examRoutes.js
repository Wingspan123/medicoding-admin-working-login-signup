const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

router.get('/exams', examController.getAllExams);
router.post('/exams', examController.createExam);
router.get('/exams/:id', examController.getExamById);
router.put('/exams/:id', examController.updateExam);
router.delete('/exams/:id', examController.deleteExam);

module.exports = router;
