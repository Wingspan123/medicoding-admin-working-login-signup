document.addEventListener('DOMContentLoaded', function() {
    function fetchAdminStatistics() {
        const baseUrl = 'http://localhost:8080'; 
        
        fetch(`${baseUrl}/api/admin/dashboard`)
            .then(response => response.json())
            .then(data => {
                const totalStudents = document.getElementById('total-students');
                const totalTeachers = document.getElementById('total-teachers');
                const totalCourses = document.getElementById('total-courses');
                const totalQuestions = document.getElementById('total-questions');

                totalStudents.querySelector('p').textContent = data.totalStudents;
                totalTeachers.querySelector('p').textContent = data.totalTeachers;
                totalCourses.querySelector('p').textContent = data.totalCourses;
                totalQuestions.querySelector('p').textContent = data.totalQuestions;
            })
            .catch(error => console.error('Error fetching admin dashboard data:', error));
    }

    fetchAdminStatistics();

    const manageUsersBtn = document.getElementById('manage-users-btn');
    const manageCoursesBtn = document.getElementById('manage-courses-btn');
    const manageExamsBtn = document.getElementById('manage-exams-btn');
    const manageQuestionsBtn = document.getElementById('manage-questions-btn');

    manageUsersBtn.addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/admin/manage_users';
    });

    manageCoursesBtn.addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/admin/manage_courses';
    });

    manageExamsBtn.addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/admin/manage_exams';
    });

    manageQuestionsBtn.addEventListener('click', function() {
        window.location.href = 'http://localhost:8080/admin/manage_questions';
    });
});
