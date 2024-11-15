function showSection(sectionId) {
    // Ocultar todas as seções
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    // Exibir apenas a seção selecionada
    document.getElementById(sectionId).classList.add('active');
  }
  