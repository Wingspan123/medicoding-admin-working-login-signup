document.addEventListener('DOMContentLoaded', function() {
    const dashboardContainer = document.getElementById('dashboard-container');

    fetchStudentDashboardData()
        .then(data => {
            renderStudentDashboard(data);
        })
        .catch(error => {
            console.error('Error fetching student dashboard data:', error);
        });

    function fetchStudentDashboardData() {
        return fetch('http://localhost:8080/api/student/dashboard')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch student dashboard data');
                }
                return response.json();
            });
    }

    function renderStudentDashboard(data) {
        dashboardContainer.innerHTML = '';

        const coursesSection = document.createElement('section');
        coursesSection.innerHTML = `<h2>Courses</h2>`;
        data.courses.forEach(course => {
            coursesSection.innerHTML += `<div>${course.name}</div>`;
        });
        dashboardContainer.appendChild(coursesSection);

        const examsSection = document.createElement('section');
        examsSection.innerHTML = `<h2>Exams</h2>`;
        data.exams.forEach(exam => {
            examsSection.innerHTML += `<div>${exam.name}</div>`;
        });
        dashboardContainer.appendChild(examsSection);

        const resultsSection = document.createElement('section');
        resultsSection.innerHTML = `<h2>Results</h2>`;
        data.results.forEach(result => {
            resultsSection.innerHTML += `<div>${result.score}</div>`;
        });
        dashboardContainer.appendChild(resultsSection);
    }
});
