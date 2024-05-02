document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const mobile = document.getElementById('mobile').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        fetch('http://localhost:8080/api/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                mobile: mobile
            })
        })
        .then(response => response.json())
        .then(data => {
            alert('Registration successful. Please check your email for verification.');
            window.location.href = 'login.html'; 
        })
        .catch(error => {
            console.error('Error during registration:', error);
            alert('Registration failed. Please try again later.');
        });
    });
});
