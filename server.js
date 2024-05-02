const express = require('express');
const app = express();
const mysqlPool = require('./db_config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authenticationRoutes = require('./routes/authentication.routes');
const adminRoutes = require('./routes/adminRoutes');
const questionRoutes = require('./routes/question.routes');
const teacherRoutes = require('./routes/teacherRoutes');

app.use('/admins', adminRoutes);
app.use('/auth', authenticationRoutes)
app.use('/question', questionRoutes);
app.use('/teacher', teacherRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use((req, res, next) => {
    res.status(404).redirect('/auth/student/login');
});

mysqlPool.getConnection((err, connection) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database connection success");
        connection.release();
    }
});

const PORT = process.env.PORT || 9080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
