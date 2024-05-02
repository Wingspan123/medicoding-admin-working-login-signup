const Exam = require('../models/examModel');

const getAllExams = async (req, res) => {
    try {
        const exams = await Exam.getAll();
        res.status(200).json(exams);
    } catch (error) {
        console.error('Error fetching exams:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getExamById = async (req, res) => {
    const examId = req.params.id;
    try {
        const exam = await Exam.getById(examId);
        if (!exam) {
            return res.status(404).json({ error: 'Exam not found' });
        }
        res.status(200).json(exam);
    } catch (error) {
        console.error('Error fetching exam by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createExam = async (req, res) => {
    const { name, description, courseId } = req.body;
    try {
        const result = await Exam.create(name, description, courseId);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating exam:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateExam = async (req, res) => {
    const examId = req.params.id;
    const { name, description, courseId } = req.body;
    try {
        const result = await Exam.update(examId, name, description, courseId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating exam:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteExam = async (req, res) => {
    const examId = req.params.id;
    try {
        const result = await Exam.delete(examId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error deleting exam:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllExams,
    getExamById,
    createExam,
    updateExam,
    deleteExam
};
