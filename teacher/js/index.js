// document.addEventListener('DOMContentLoaded', function() {
//     // Function to fetch teacher statistics dynamically
//     function fetchTeacherStatistics() {
//         const apiKey = 'http://localhost:8080'; // Replace 'your_api_key' with your actual API key
        
//         // Fetch statistics from backend API with API key in headers
//         fetch('http://localhost:8080/api/teacher/dashboard', {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Update DOM with fetched data
//             const totalStudents = document.getElementById('total-students');
//             const totalCourses = document.getElementById('total-courses');
//             const papersPerCourse = document.getElementById('papers-per-course');

//             totalStudents.querySelector('p').textContent = data.totalStudents;
//             totalCourses.querySelector('p').textContent = data.totalCourses;
//             renderPapersPerCourse(papersPerCourse, data.papersPerCourse);
//         })
//         .catch(error => console.error('Error fetching teacher dashboard data:', error));
//     }

//     // Function to render papers per course
//     function renderPapersPerCourse(container, papers) {
//         const ul = document.createElement('ul');
//         papers.forEach(course => {
//             const li = document.createElement('li');
//             li.textContent = `${course.name}: ${course.paperCount}`;
//             ul.appendChild(li);
//         });
//         container.appendChild(ul);
//     }

//     // Fetch teacher statistics when the page loads
//     fetchTeacherStatistics();
// });
