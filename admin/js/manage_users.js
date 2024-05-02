document.addEventListener('DOMContentLoaded', function() {
    const userId = 3;

    function fetchUserStatistics() {
        fetch(`http://localhost:8080/api/users/${userId}/teachers/count`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch teacher statistics');
                }
                return response.json();
            })
            .then(data => {
                const teachersCount = document.getElementById('teachers-count');
                teachersCount.textContent = data.count;
            })
            .catch(error => console.error('Error fetching teacher statistics:', error));

        fetch(`http://localhost:8080/api/users/${userId}/students/count`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch student statistics');
                }
                return response.json();
            })
            .then(data => {
                const studentsCount = document.getElementById('students-count');
                studentsCount.textContent = data.count;
            })
            .catch(error => console.error('Error fetching student statistics:', error));
    }

    fetchUserStatistics();

    function showAllStudents() {
        fetch(`http://localhost:8080/api/users/${userId}/students`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch student details');
                }
                return response.json();
            })
            .then(data => {
                const studentDetailsContainer = document.getElementById('student-details-container');
                const studentDetails = document.getElementById('student-details');

                studentDetails.innerHTML = '';

                data.forEach(student => {
                    const studentInfo = document.createElement('div');
                    studentInfo.textContent = `${student.name} - ${student.mobile}`;
                    studentDetails.appendChild(studentInfo);
                });

                studentDetailsContainer.style.display = 'block';
            })
            .catch(error => console.error('Error fetching student details:', error));
    }

    function showAllStudentsOnClick() {
        const totalTeachersSection = document.getElementById('total-teachers');
        totalTeachersSection.addEventListener('click', showAllStudents);
    }
    showAllStudentsOnClick();
});
