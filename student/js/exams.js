document.addEventListener('DOMContentLoaded', function() {
    function fetchExamQuestions() {
        fetch('http://localhost:8080/api/student/exams', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer your_api_key'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch exam questions');
            }
            return response.json();
        })
        .then(data => {
            const container = document.querySelector('.container');
            data.forEach(question => {
                const questionElement = document.createElement('div');
                questionElement.classList.add('question');
                questionElement.innerHTML = `
                    <h3>${question.title}</h3>
                    <ul>
                        ${question.options.map(option => `<li>${option}</li>`).join('')}
                    </ul>
                `;
                container.appendChild(questionElement);
            });
        })
        .catch(error => {
            console.error('Error fetching exam questions:', error);
        });
    }

    fetchExamQuestions();

    document.getElementById('exam-submit-btn').addEventListener('click', function() {
        const selectedAnswers = [];
        document.querySelectorAll('.question').forEach((question, index) => {
            const selectedOption = question.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                selectedAnswers.push({
                    questionIndex: index,
                    answer: selectedOption.value
                });
            }
        });
        submitExam(selectedAnswers);
    });

    function submitExam(answers) {
        fetch('http://localhost:8080/api/student/exams/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_api_key'
            },
            body: JSON.stringify({ answers })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit exam');
            }
            return response.json();
        })
        .then(data => {
            console.log('Exam submitted successfully:', data);
            window.location.href = '/results.html';
        })
        .catch(error => {
            console.error('Error submitting exam:', error);
        });
    }
});
