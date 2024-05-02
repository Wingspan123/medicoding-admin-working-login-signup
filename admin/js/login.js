document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const validCredentials = { username: 'root', password: 'root' };

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validCredentials.username && password === validCredentials.password) {
    alert('Login successful');
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
