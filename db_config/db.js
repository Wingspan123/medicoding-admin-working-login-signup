const mysql = require('mysql');

const mysqlPool = mysql.createPool({
    host: "162.241.123.162",
    user: "wgshe7j6_teacher",
    password: "Wingspan@144",
    database: "wgshe7j6_quiz",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

mysqlPool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err);
    } else {
      console.log("Database connection success");
      connection.release();
    }
  });
  
  module.exports = mysqlPool;
