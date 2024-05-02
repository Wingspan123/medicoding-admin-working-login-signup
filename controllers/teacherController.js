// const pool = require('../db_config/db');

// const createTeacher = (req, res) => {
//     const { name, email } = req.body;
//     pool.query('INSERT INTO teachers (name, email) VALUES (?, ?)', [name, email], (error, results) => {
//         if (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         res.status(201).json({ message: 'Teacher created successfully' });
//     });
// };

// const getAllTeachers = (req, res) => {
//     pool.query('SELECT * FROM teachers', (error, results) => {
//         if (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         res.status(200).json(results);
//     });
// };

// const getTeacherById = (req, res) => {
//     const teacherId = req.params.id;
//     pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         if (results.length === 0) {
//             return res.status(404).json({ error: 'Teacher not found' });
//         }
//         res.status(200).json(results[0]);
//     });
// };

// const updateTeacher = (req, res) => {
//     const teacherId = req.params.id;
//     const { name, email } = req.body;
//     pool.query('UPDATE teachers SET name = ?, email = ? WHERE teacher_id = ?', [name, email, teacherId], (error, results) => {
//         if (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         if (results.affectedRows === 0) {
//             return res.status(404).json({ error: 'Teacher not found' });
//         }
//         res.status(200).json({ message: 'Teacher updated successfully' });
//     });
// };

// const deleteTeacher = (req, res) => {
//     const teacherId = req.params.id;
//     pool.query('DELETE FROM teachers WHERE teacher_id = ?', [teacherId], (error, results) => {
//         if (error) {
//             console.error(error);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
//         if (results.affectedRows === 0) {
//             return res.status(404).json({ error: 'Teacher not found' });
//         }
//         res.status(200).json({ message: 'Teacher deleted successfully' });
//     });
// };

// module.exports = {
//     createTeacher,
//     getAllTeachers,
//     getTeacherById,
//     updateTeacher,
//     deleteTeacher
// };

const path = require('path');

exports.getTeachersDashboardScreen = (req, res) => {
    res.sendFile(path.join(__dirname, '../teacher/index.html'));
}