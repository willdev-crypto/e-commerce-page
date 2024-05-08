
const servicos = [
    { nome: 'Serviço 1', preco: 100 },
    { nome: 'Serviço 2', preco: 150 },
    { nome: 'Serviço 3', preco: 200 }
];


function adicionarServicos() {
    const servicosSection = document.getElementById('servicos-section');

    servicos.forEach(servico => {
        const servicoDiv = document.createElement('div');
        servicoDiv.classList.add('servico');

        const nomeServico = document.createElement('h3');
        nomeServico.textContent = servico.nome;

        const precoServico = document.createElement('p');
        precoServico.textContent = `Preço: R$ ${servico.preco.toFixed(2)}`;

        servicoDiv.appendChild(nomeServico);
        servicoDiv.appendChild(precoServico);
        servicosSection.appendChild(servicoDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const verServicosBtn = document.querySelector('.btn');
    verServicosBtn.addEventListener('click', function(event) {
        adicionarServicos();
        event.preventDefault(); 
    });
});
