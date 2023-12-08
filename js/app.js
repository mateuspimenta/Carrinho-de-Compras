let totalCarrinho = 0;
limpar();

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade<1) {
        alert('Por favor, informe a quantidade.');
    } else {
        let itemSelecionado = document.getElementById('produto').value;
        let nomeProduto = itemSelecionado.split(' -')[0];
        let valorUnitario = itemSelecionado.split('R$')[1];
        let subTotal = valorUnitario * quantidade;
        let itemHTML = `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">
            R$${subTotal}</span></section>`;
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML += itemHTML;
        totalCarrinho += subTotal;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.innerHTML = 'R$' + totalCarrinho;
        document.getElementById('quantidade').value = '';
    }
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}