// document.addEventListener('DOMContentLoaded', function() {
//     const questionForm = document.getElementById('question-form');

//     questionForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get form data
//         const formData = new FormData(questionForm);
//         const questionText = formData.get('questionText');
//         const option1 = formData.get('option1');
//         const option2 = formData.get('option2');
//         const option3 = formData.get('option3');
//         const option4 = formData.get('option4');
//         const correctAnswer = formData.get('correctAnswer');
//         const marks = formData.get('marks');

//         // Example AJAX request
//         fetch('http://localhost:8080/api/questions', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 questionText,
//                 options: [option1, option2, option3, option4],
//                 correctAnswer,
//                 marks
//             })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to add question');
//             }
//             // Redirect to questions page or show success message
//         })
//         .catch(error => {
//             console.error('Failed to add question:', error);
//             // Show error message to the user
//         });
//     });
// });
