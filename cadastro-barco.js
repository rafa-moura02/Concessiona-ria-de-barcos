document.addEventListener('DOMContentLoaded', () => {
    const barcoForm = document.getElementById('barcoForm');
    const tabelaBarcos = document.getElementById('tabelaBarcos').querySelector('tbody');
  
    
    barcoForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      
      const modelo = document.getElementById('modeloBarco').value.trim();
      const ano = document.getElementById('anoBarco').value.trim();
      const tamanho = document.getElementById('tamanhoBarco').value.trim();
      const valor = document.getElementById('valorBarco').value.trim();
  
    
      if (!modelo || !ano || !tamanho || !valor) {
        alert('Preencha todos os campos!');
        return;
      }
  
      
      const novaLinha = tabelaBarcos.insertRow();
      novaLinha.innerHTML = `
        <td>${modelo}</td>
        <td>${ano}</td>
        <td>${tamanho} metros</td>
        <td>R$ ${parseFloat(valor).toFixed(2)}</td>
        <td>
          <button class="editar">Editar</button>
          <button class="excluir">Excluir</button>
        </td>
      `;
  
      
      novaLinha.querySelector('.excluir').addEventListener('click', () => novaLinha.remove());
  
      
      barcoForm.reset();
    });
  });
  