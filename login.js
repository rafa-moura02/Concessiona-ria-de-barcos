document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (!username || !password) {
        alert('Preencha todos os campos!');
        return;
      }
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const validUser = users.find(user => user.username === username && user.password === password);
  
      if (validUser) {
        alert(`Bem-vindo, ${validUser.username}!`);
        window.location.href = 'dashboard.html'; 
      } else {
        alert('Usuário ou senha inválidos.');
      }
    });
  });
  