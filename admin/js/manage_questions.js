document.addEventListener('DOMContentLoaded', function() {
    const addQuestionForm = document.getElementById('add-question-form');
    const questionList = document.getElementById('question-list');

    function fetchAndRenderQuestions() {
        fetchQuestions()
            .then(renderQuestions)
            .catch(error => console.error('Error fetching and rendering questions:', error));
    }

    function fetchQuestions() {
        return fetch('http://localhost:8080/api/questions?user_id=3')
            .then(response => response.json());
    }

    function renderQuestions(questions) {
        questionList.innerHTML = '';
        questions.forEach(question => {
            const questionItem = document.createElement('div');
            questionItem.classList.add('question-item');
            questionItem.innerHTML = `
                <p>${question.question}</p>
                <ul>
                    <li>${question.options[0]}</li>
                    <li>${question.options[1]}</li>
                    <li>${question.options[2]}</li>
                    <li>${question.options[3]}</li>
                </ul>
                <p>Correct Answer: Option ${question.correctAnswer}</p>
                <p>Marks: ${question.marks}</p>
            `;
            questionList.appendChild(questionItem);
        });
    }

    addQuestionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(addQuestionForm);
        const questionData = {
            question: formData.get('question'),
            options: [
                formData.get('option1'),
                formData.get('option2'),
                formData.get('option3'),
                formData.get('option4')
            ],
            correctAnswer: parseInt(formData.get('correct-answer')),
            marks: parseInt(formData.get('marks')),
            user_id: 3 
        };
        addQuestion(questionData)
            .then(fetchAndRenderQuestions)
            .catch(error => console.error('Error adding question:', error));
    });

    function addQuestion(questionData) {
        return fetch('http://localhost:8080/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionData)
        });
    }

    fetchAndRenderQuestions();
});