// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('login-form');

//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get form data
//         const formData = new FormData(loginForm);
//         const username = formData.get('username');
//         const password = formData.get('password');

//         // Example AJAX request
//         fetch('http://localhost:8080/api/teacher/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password
//             })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Invalid credentials');
//             }
//             // Redirect to dashboard or show success message
//         })
//         .catch(error => {
//             console.error('Login failed:', error);
//             // Show error message to the user
//         });
//     });
// });
