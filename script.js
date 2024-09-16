// Função para adicionar produtos ou serviços ao carrinho
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Adicionando o produto ao carrinho
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

// Função para calcular o valor total do carrinho
function calcularTotalCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;
    
    carrinho.forEach(produto => {
        total += produto.preco;
    });

    // Exibir o valor total
    document.getElementById('valorTotal').textContent = total.toFixed(2);
}

// Função para carregar os itens do carrinho e exibir
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('listaCarrinho');

    listaCarrinho.innerHTML = '';
    carrinho.forEach(produto => {
        let li = document.createElement('li');
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    // Atualiza o valor total do carrinho
    calcularTotalCarrinho();
}

// Função de inicialização nas páginas de produtos
function inicializarProduto() {
    // Simular dados do produto (Banho e Tosa Completa)
    const produto = {
        nome: 'Banho e Tosa Completa',
        preco: 70.00
    };

    // Configurando o botão para adicionar ao carrinho
    const botaoAdicionar = document.querySelector('.btn-primary');
    botaoAdicionar.addEventListener('click', function() {
        adicionarAoCarrinho(produto);
    });
}

// Função para inicializar o carrinho na página de carrinho.html
function inicializarCarrinho() {
    carregarCarrinho();
}

// Verifica se estamos na página de produto ou carrinho
if (document.querySelector('#produto')) {
    inicializarProduto();
} else if (document.querySelector('#carrinho')) {
    inicializarCarrinho();
}
