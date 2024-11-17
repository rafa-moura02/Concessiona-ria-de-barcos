const vendaForm = document.getElementById('vendaForm');
    const tabelaVendas = document.getElementById('tabelaVendas').querySelector('tbody');

    vendaForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nomeCliente = document.getElementById('nomeClienteVenda').value.trim();
      const emailCliente = document.getElementById('emailClienteVenda').value.trim();
      const modelo = document.getElementById('modeloVenda').value;
      const valor = parseFloat(document.getElementById('valorVenda').value.trim());

      if (!nomeCliente || !emailCliente || !modelo || !valor) {
        alert('Preencha todos os campos!');
        return;
      }

      const row = tabelaVendas.insertRow();
      row.innerHTML = `
        <td>${nomeCliente}</td>
        <td>${emailCliente}</td>
        <td>${modelo}</td>
        <td>R$ ${valor.toFixed(2)}</td>
      `;

      vendaForm.reset();
    });

    function voltarHome() {
        window.location.href = 'index.html';
    }
         