const path = require('path');
const bcrypt = require('bcrypt');
const pool = require('../db_config/db');
const jwt = require('jsonwebtoken');

exports.getAdminLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../admin/login.html'));
};

exports.getTeacherLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../teacher/login.html'));
};

exports.getStudentLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../student/login.html'));
};


exports.getAdminSignUpPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../admin/signup.html'));
};

exports.getTeacherSignUpPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../teacher/signup.html'));
};

exports.getStudentSignUpPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../student/signup.html'));
};


exports.login = (req, res) => {
    const { username, password, role } = req.body;
    pool.query('SELECT * FROM users WHERE username = ?', [username], function (error, results, fields) {
        if (error) {
            return res.send('Failed to authenticate user');
        }
        if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(password, user.password, function (err, result) {
                if (err) {
                    return res.send('Failed to authenticate user');
                }
                if (result) {
                    if (user.role === role) {
                        const token = jwt.sign({ username: user.username, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
                        res.cookie('token', token, { httpOnly: true });

                        res.sendFile(path.join(__dirname, `../${user.role}/index.html`));
                    } else {
                        res.send('Invalid role');
                    }
                } else {
                    res.send('Invalid username or password');
                }
            });
        } else {
            res.send('Invalid username or password');
        }
    });
};


exports.signup = (req, res) => {
    const { username, password, confirmPassword, email, mobile, role } = req.body;

    if (!username || !password || !confirmPassword || !email || !role) {
        return res.status(400).send('Missing required fields');
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    const allowedRoles = ['admin', 'teacher', 'student'];
    if (!allowedRoles.includes(role)) {
        return res.status(400).send('Invalid user role');
    }

    pool.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) {
            return res.status(500).send('Failed to query database');
        }

        if (results.length > 0) {
            return res.status(400).send('Username already taken');
        }

        bcrypt.hash(password, 10, (error, hash) => {
            if (error) {
                return res.status(500).send('Failed to hash password');
            }

            pool.query('INSERT INTO users (username, password, email, mobile, role) VALUES (?, ?, ?, ?, ?)',
                [username, hash, email, mobile, role], (error, results) => {
                    if (error) {
                        return res.status(500).send('Failed to register user');
                    }

                    if (results.affectedRows > 0) {
                        res.sendFile(path.join(__dirname, `../${role}/login.html`));
                    } else {
                        res.status(500).send('Failed to register user');
                    }
                });
        });
    });
};