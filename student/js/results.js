document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and display exam results
    function fetchExamResults() {
        // Fetch exam results from the backend API
        fetch('http://localhost:8080/api/student/results', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer your_api_key'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch exam results');
            }
            return response.json();
        })
        .then(data => {
            // Display exam results in the UI
            const container = document.querySelector('.container');
            data.forEach(result => {
                const resultElement = document.createElement('div');
                resultElement.classList.add('result');
                resultElement.innerHTML = `
                    <h3>${result.courseName}</h3>
                    <p>Marks Obtained: ${result.marks}</p>
                `;
                container.appendChild(resultElement);
            });
        })
        .catch(error => {
            console.error('Error fetching exam results:', error);
            // Display error message to the user
        });
    }

    // Fetch exam results when the page loads
    fetchExamResults();
});
