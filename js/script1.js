const servicosBarbearia = [
    { nome: "Alinhamento Americano", preco: 40.00 },
    { nome: "Barba Completa", preco: 25.00 },
    { nome: "Barbaterapia", preco: 40.00 },
    { nome: "Barba + Pezinho", preco: 25.00 },
    { nome: "Barba + Pigmentação", preco: 40.00 },
    { nome: "Corte Degradê", preco: 25.00 },
    { nome: "Corte Infantil", preco: 25.00 },
    { nome: "Corte Social", preco: 20.00 },
    { nome: "Corte Pezinho", preco: 10.00 },
    { nome: "Corte + Alinhamento Americano", preco: 60.00 },
    { nome: "Corte + Barba", preco: 45.00 },
    { nome: "Corte + Desenhos", preco: 30.00 }, 
    { nome: "Corte + Lavagem", preco: 30.00 },
    { nome: "Corte + Luzes", preco: 80.00 },
    { nome: "Corte + Nevou", preco: 110.00 },
    { nome: "Corte + Pigmentação", preco: 40.00 },
    { nome: "Corte + Platinado", preco: 100.00 },
    { nome: "Corte + Reflexos", preco: 90.00 },
    { nome: "Lavagem", preco: 10.00 },
    { nome: "Limpeza Facial", preco: 20.00 },
    { nome: "Pigmentação", preco: 20.00 },
    { nome: "Sobrancelha", preco: 10.00 },
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
  
        Aguardo sua confirmação, Nana.
    `);
  
    // Substitua o número abaixo pelo número de WhatsApp da barbearia
    const numeroWhatsApp = "5598991637853"; // Exemplo: "55" para Brasil + número
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`;
  
    // Redirecionar para o WhatsApp
    window.open(linkWhatsApp, '_blank');
  }