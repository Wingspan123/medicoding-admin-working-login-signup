const express = require('express');
const router = express.Router();
const controller = require('../controllers/question.controller');

router.post('/add-question', controller.addQuestion);
router.get('/screen/get-questions', controller.getQuestionsScren);
router.get('/all-questions', controller.getQuestions);
router.get('/courses', controller.getCourses);
router.get('/exam-questions', controller.getExamQuestions)


module.exports = router;
