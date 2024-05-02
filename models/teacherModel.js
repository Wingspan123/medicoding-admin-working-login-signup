const pool = require('../db_config/db');

const Teacher = {
    getAll: async () => {
        try {
            const teachers = await pool.query('SELECT * FROM teachers');
            return teachers;
        } catch (error) {
            throw new Error(error);
        }
    },
    getById: async (id) => {
        try {
            const teacher = await pool.query('SELECT * FROM teachers WHERE teacher_id = ?', [id]);
            return teacher[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    create: async (name, email) => {
        try {
            await pool.query('INSERT INTO teachers (name, email) VALUES (?, ?)', [name, email]);
            return { message: 'Teacher created successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    update: async (id, name, email) => {
        try {
            const result = await pool.query('UPDATE teachers SET name = ?, email = ? WHERE teacher_id = ?', [name, email, id]);
            if (result.affectedRows === 0) {
                throw new Error('Teacher not found');
            }
            return { message: 'Teacher updated successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    delete: async (id) => {
        try {
            const result = await pool.query('DELETE FROM teachers WHERE teacher_id = ?', [id]);
            if (result.affectedRows === 0) {
                throw new Error('Teacher not found');
            }
            return { message: 'Teacher deleted successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = Teacher;
