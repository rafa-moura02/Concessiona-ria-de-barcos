document.addEventListener('DOMContentLoaded', () => {
    const vendaForm = document.getElementById('vendaForm');
    const tabelaVendas = document.getElementById('tabelaVendas').querySelector('tbody');
  
    // Evento de submissão do formulário
    vendaForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Captura os valores dos campos do formulário
      const nomeCliente = document.getElementById('nomeClienteVenda').value.trim();
      const emailCliente = document.getElementById('emailClienteVenda').value.trim();
      const modeloVenda = document.getElementById('modeloVenda').value;
      const valorVenda = document.getElementById('valorVenda').value.trim();
  
      // Verifica se todos os campos foram preenchidos
      if (!nomeCliente || !emailCliente || !modeloVenda || !valorVenda) {
        alert('Preencha todos os campos!');
        return;
      }
  
      // Adiciona uma nova linha na tabela
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
  
      // Evento para excluir a linha
      novaLinha.querySelector('.excluir').addEventListener('click', () => novaLinha.remove());
  
      // Limpa o formulário após o envio
      vendaForm.reset();
    });
  });
  