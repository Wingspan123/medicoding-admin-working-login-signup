const pool = require('../db_config/db');

const Admin = {
    getAll: async () => {
        try {
            const admins = await pool.query('SELECT * FROM admins');
            return admins;
        } catch (error) {
            throw new Error(error);
        }
    },
    getById: async (id) => {
        try {
            const admin = await pool.query('SELECT * FROM admins WHERE admin_id = ?', [id]);
            return admin[0];
        } catch (error) {
            throw new Error(error);
        }
    },
    create: async (username, password) => {
        try {
            await pool.query('INSERT INTO admins (username, password) VALUES (?, ?)', [username, password]);
            return { message: 'Admin created successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    update: async (id, username, password) => {
        try {
            const result = await pool.query('UPDATE admins SET username = ?, password = ? WHERE admin_id = ?', [username, password, id]);
            if (result.affectedRows === 0) {
                throw new Error('Admin not found');
            }
            return { message: 'Admin updated successfully' };
        } catch (error) {
            throw new Error(error);
        }
    },
    delete: async (id) => {
        try {
            const result = await pool.query('DELETE FROM admins WHERE admin_id = ?', [id]);
            if (result.affectedRows === 0) {
                throw new Error('Admin not found');
            }
            return { message: 'Admin deleted successfully' };
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = Admin;
