document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');
  
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (!username || !email || !password) {
        alert('Preencha todos os campos!');
        return;
      }
  
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const userExists = users.some(user => user.username === username || user.email === email);
      if (userExists) {
        alert('Usuário ou email já cadastrado. Tente outro.');
        return;
      }
  
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Conta criada com sucesso! Faça login.');
      window.location.href = 'login.html'; 
    });
  });
  