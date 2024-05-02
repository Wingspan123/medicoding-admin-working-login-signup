document.addEventListener('DOMContentLoaded', function() {
    const addCourseForm = document.getElementById('add-course-form');
    const courseList = document.getElementById('course-list');

    function fetchAndRenderCourses() {
        fetchCourses()
            .then(renderCourses)
            .catch(error => console.error('Error fetching and rendering courses:', error));
    }

    function fetchCourses() {
        return fetch('http://localhost:8080/api/courses')
            .then(response => response.json());
    }

    function renderCourses(courses) {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.classList.add('course-item');
            courseItem.textContent = course.name;
            courseList.appendChild(courseItem);
        });
    }

    addCourseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const courseName = document.getElementById('course-name').value;
        addCourse(courseName)
            .then(fetchAndRenderCourses)
            .catch(error => console.error('Error adding course:', error));
    });

    function addCourse(courseName) {
        return fetch('http://localhost:8080/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: courseName })
        });
    }

    fetchAndRenderCourses();
});
