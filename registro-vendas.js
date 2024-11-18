document.addEventListener('DOMContentLoaded', () => {
    const vendaForm = document.getElementById('vendaForm');
    const tabelaVendas = document.getElementById('tabelaVendas').querySelector('tbody');
  
    
    vendaForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      
      const nomeCliente = document.getElementById('nomeClienteVenda').value.trim();
      const emailCliente = document.getElementById('emailClienteVenda').value.trim();
      const modeloVenda = document.getElementById('modeloVenda').value;
      const valorVenda = document.getElementById('valorVenda').value.trim();
  
      
      if (!nomeCliente || !emailCliente || !modeloVenda || !valorVenda) {
        alert('Preencha todos os campos!');
        return;
      }
  
      
      const novaLinha = tabelaVendas.insertRow();
      novaLinha.innerHTML = `
        <td>${nomeCliente}</td>
        <td>${emailCliente}</td>
        <td>${modeloVenda}</td>
        <td>R$ ${parseFloat(valorVenda).toFixed(2)}</td>
        <td>
          <button class="excluir">Excluir</button>
        </td>
      `;
  
      
      novaLinha.querySelector('.excluir').addEventListener('click', () => novaLinha.remove());
  
      
      vendaForm.reset();
    });
  });
  
