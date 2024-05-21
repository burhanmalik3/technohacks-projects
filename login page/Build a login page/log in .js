document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the username and password values
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // You can perform your authentication logic here
      // For demonstration purposes, let's just log the username and password
      console.log('Username:', username);
      console.log('Password:', password);
  
      // You can redirect the user to another page after successful login
      // window.location.href = 'dashboard.html';
    });
  });
  