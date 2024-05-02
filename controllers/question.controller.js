const path = require('path');
const pool = require('../db_config/db');

exports.addQuestion = (req, res) => {
    const { question_text, option1, option2, option3, option4, correct_answer, marks, paper, course_id } = req.body;

    const query = 'INSERT INTO questions (question_text, option1, option2, option3, option4, correct_answer, marks, paper,course_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)';
    const values = [question_text, option1, option2, option3, option4, correct_answer, marks, paper, course_id];

    console.log(`Executing query: ${query} with values: ${values}`);

    pool.query(query, values, function (error, results, fields) {
        if (error) {
            return res.send('Failed to add question');
        }
        if (results.affectedRows > 0) {
            // res.sendFile(path.join(__dirname, '../teacher/index.html'));
            res.redirect('/teacher/screen/get-dashboard');
        } else {
            res.send('Failed to add question');
        }
    });
};

exports.getQuestions = (req, res) => {
    const query = 'SELECT * FROM questions';

    console.log(`Executing query: ${query}`);

    pool.query(query, function (error, results, fields) {
        if (error) {
            return res.status(500).send('Failed to retrieve questions');
        }
        if (results.length > 0) {
            console.log(results)
            res.json(results);
        } else {
            res.status(404).send('No questions found');
        }
    });
};

exports.getQuestionsScren = (req, res) => {
    res.sendFile(path.join(__dirname, '../teacher/manage_questions.html'));
}


exports.getCourses = (req, res) => {
    let sql = 'SELECT * FROM courses';
    pool.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
}


exports.getExamQuestions=(req, res) => {
    const { paper, course_id } = req.query;
  
    if (!paper || !course_id) {
      return res.status(400).send('Missing required query parameters: paper, course_id');
    }
  
    const sql = 'SELECT * FROM questions WHERE paper = ? AND course_id = ?';
    pool.query(sql, [paper, course_id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Server error');
      }
  
      res.json(result);
    });
  }
  