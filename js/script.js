const servicosBarbearia = [
    { nome: "Corte Masculino", preco: 40.00 },
    { nome: "Barba Completa", preco: 30.00 },
    { nome: "Corte + Barba", preco: 65.00 },
    { nome: "Sobrancelha", preco: 15.00 },
    { nome: "Corte Infantil", preco: 35.00 },
    { nome: "Hidratação Capilar", preco: 25.00 },
    { nome: "Pigmentação de Barba", preco: 35.00 }
  ];
  
const select = document.getElementById('servicos-select');
  
servicosBarbearia.forEach((servico, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${servico.nome} - R$ ${servico.preco.toFixed(2)}`;
    select.appendChild(option);
});

function agendar() {
    const index = select.value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
  
    if (index === "" || data === "" || hora === "" || nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
  
    const servico = servicosBarbearia[index];
    const resumo = document.getElementById('resumo');
    resumo.innerHTML = `
        <strong>Agendamento confirmado!</strong><br><br>
        Serviço: ${servico.nome}<br>
        Data: ${data}<br>
        Horário: ${hora}<br>
        Cliente: ${nome}<br>
        Telefone: ${telefone}<br>
        Preço: R$ ${servico.preco.toFixed(2)}
    `;
    resumo.style.display = 'block';
  
    // Gerar mensagem para o WhatsApp
    const mensagemWhatsApp = encodeURIComponent(`
        *Novo Agendamento para você!* 🗓️
  
        Cliente: ${nome}
        Serviço: ${servico.nome}
        Preço: R$ ${servico.preco.toFixed(2)}
        Data: ${data}
        Horário: ${hora}
        Telefone: ${telefone}
  
        Aguardo sua confirmação.
    `);
  
    // Substitua o número abaixo pelo número de WhatsApp da barbearia
    const numeroWhatsApp = "5598996215367"; // Exemplo: "55" para Brasil + número
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`;
  
    // Redirecionar para o WhatsApp
    window.open(linkWhatsApp, '_blank');
  }