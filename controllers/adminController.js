const pool = require('../db_config/db');
const Admin = require('../models/adminModel');

const createAdmin = (req, res) => {
    const { username, password } = req.body;
    Admin.create(username, password, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(201).json({ message: 'Admin created successfully' });
    });
};

const getAllAdmins = (req, res) => {
    pool.query('SELECT * FROM admins', (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(results);
    });
};

const getAdminById = (req, res) => {
    const adminId = req.params.id;
    pool.query('SELECT * FROM admins WHERE admin_id = ?', [adminId], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(results[0]);
    });
};

const updateAdmin = (req, res) => {
    const adminId = req.params.id;
    const { username, password } = req.body;
    pool.query('UPDATE admins SET username = ?, password = ? WHERE admin_id = ?', [username, password, adminId], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin updated successfully' });
    });
};

const deleteAdmin = (req, res) => {
    const adminId = req.params.id;
    pool.query('DELETE FROM admins WHERE admin_id = ?', [adminId], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    });
};

module.exports = {
    createAdmin,
    getAllAdmins,
    getAdminById,
    updateAdmin,
    deleteAdmin
};
