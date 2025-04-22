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