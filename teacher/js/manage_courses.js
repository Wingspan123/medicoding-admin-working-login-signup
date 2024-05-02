document.addEventListener('DOMContentLoaded', function() {
    const courseForm = document.getElementById('course-form');

    courseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(courseForm);
        const courseName = formData.get('courseName');

        // Example AJAX request
        fetch('http://localhost:8080/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: courseName
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add course');
            }
            // Redirect to courses page or show success message
        })
        .catch(error => {
            console.error('Failed to add course:', error);
            // Show error message to the user
        });
    });
});
