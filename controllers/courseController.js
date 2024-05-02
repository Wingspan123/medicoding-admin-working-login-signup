const Course = require('../models/courseModel');

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.getAll();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCourseById = async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await Course.getById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        console.error('Error fetching course by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createCourse = async (req, res) => {
    const { name, description } = req.body;
    try {
        const result = await Course.create(name, description);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const { name, description } = req.body;
    try {
        const result = await Course.update(courseId, name, description);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCourse = async (req, res) => {
    const courseId = req.params.id;
    try {
        const result = await Course.delete(courseId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
