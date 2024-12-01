document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
  
    alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
    document.getElementById('contactForm').reset();
  });
  
  // Função para validar e-mail
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  