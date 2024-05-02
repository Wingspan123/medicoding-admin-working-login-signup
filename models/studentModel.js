const pool = require('../db_config/db');

const Student = {
    getAll: async () => {
        try {
            const students = await pool.query('SELECT * FROM students');
            return students;
        } catch (error) {
            throw new Error(error);
        }
    },
    getById: async (id) => {
        try {
            const student = await pool.query('SELECT * FROM students WHERE student_id = ?', [id]);
            return student[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    create: async (name, email) => {
        try {
            await pool.query('INSERT INTO students (name, email) VALUES (?, ?)', [name, email]);
            return { message: 'Student created successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    update: async (id, name, email) => {
        try {
            const result = await pool.query('UPDATE students SET name = ?, email = ? WHERE student_id = ?', [name, email, id]);
            if (result.affectedRows === 0) {
                throw new Error('Student not found');
            }
            return { message: 'Student updated successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    delete: async (id) => {
        try {
            const result = await pool.query('DELETE FROM students WHERE student_id = ?', [id]);
            if (result.affectedRows === 0) {
                throw new Error('Student not found');
            }
            return { message: 'Student deleted successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = Student;
