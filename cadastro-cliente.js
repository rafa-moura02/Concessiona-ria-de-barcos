document.addEventListener('DOMContentLoaded', () => {
    const clienteForm = document.getElementById('clienteForm');
    const tabelaClientes = document.getElementById('tabelaClientes').querySelector('tbody');
  
    clienteForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nome = document.getElementById('nomeCliente').value.trim();
      const email = document.getElementById('emailCliente').value.trim();
      const telefone = document.getElementById('telefoneCliente').value.trim();
      const endereco = document.getElementById('enderecoCliente').value.trim();
      const cpf = document.getElementById('cpfCliente').value.trim();
  
      if (!nome || !email || !telefone || !endereco || !cpf) {
        alert('Preencha todos os campos!');
        return;
      }
  
      adicionarLinhaTabela(nome, email, telefone, endereco, cpf);
      clienteForm.reset();
    });
  
    function adicionarLinhaTabela(nome, email, telefone, endereco, cpf) {
      const linha = tabelaClientes.insertRow();
  
      linha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${endereco}</td>
        <td>${cpf}</td>
        <td>
          <button class="editar">Editar</button>
          <button class="excluir">Excluir</button>
        </td>
      `;
  
      linha.querySelector('.excluir').addEventListener('click', () => linha.remove());
  
      linha.querySelector('.editar').addEventListener('click', () => editarLinha(linha));
    }
  
    function editarLinha(linha) {
      const celulas = linha.querySelectorAll('td');
      const valores = Array.from(celulas).slice(0, -1).map(celula => celula.textContent);
  
      celulas.forEach((celula, index) => {
        if (index < valores.length) {
          celula.innerHTML = `<input type="text" value="${valores[index]}">`;
        }
      });
  
      const botoes = linha.querySelector('td:last-child');
      botoes.innerHTML = `
        <button class="salvar">Salvar</button>
        <button class="cancelar">Cancelar</button>
      `;
  
      botoes.querySelector('.salvar').addEventListener('click', () => salvarEdicao(linha));
      botoes.querySelector('.cancelar').addEventListener('click', () => cancelarEdicao(linha, valores));
    }
  
    function salvarEdicao(linha) {
      const inputs = linha.querySelectorAll('input');
      inputs.forEach((input, index) => {
        linha.cells[index].textContent = input.value.trim();
      });
  
      restaurarBotoes(linha);
    }
  
    function cancelarEdicao(linha, valores) {
      valores.forEach((valor, index) => {
        linha.cells[index].textContent = valor;
      });
  
      restaurarBotoes(linha);
    }
  
    function restaurarBotoes(linha) {
      const botoes = linha.querySelector('td:last-child');
      botoes.innerHTML = `
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
      `;
  
      botoes.querySelector('.excluir').addEventListener('click', () => linha.remove());
      botoes.querySelector('.editar').addEventListener('click', () => editarLinha(linha));
    }
  });
  