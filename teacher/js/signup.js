// document.addEventListener('DOMContentLoaded', function() {
//     const signupForm = document.getElementById('signup-form');

//     signupForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get form data
//         const formData = new FormData(signupForm);
//         const username = formData.get('username');
//         const password = formData.get('password');
//         const confirmPassword = formData.get('confirm-password');
//         const email = formData.get('email');
//         const mobile = formData.get('mobile');

//         // Validate form data (e.g., password confirmation)

//         // Example AJAX request
//         fetch('http://localhost:8080/api/teacher/signup', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username,
//                 password,
//                 email,
//                 mobile
//             })
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Signup failed');
//             }
//             // Redirect to login page or show success message
//         })
//         .catch(error => {
//             console.error('Signup failed:', error);
//             // Show error message to the user
//         });
//     });
// });
