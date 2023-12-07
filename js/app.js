function adicionar() {
    let totalInicial = document.getElementById('valor-total').outerText;
    totalInicial = parseInt(totalInicial.slice(2,totalInicial.length));
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade<1) {
        alert('Por favor, informe a quantidade.');
    } else {
        let itemSelecionado = document.getElementById('produto').value;
        let fimNomeProduto = itemSelecionado.indexOf('-')-1;
        let produto = itemSelecionado.slice(0,fimNomeProduto);
        let inicioValor = fimNomeProduto+5;
        let valorItem = itemSelecionado.slice(inicioValor,itemSelecionado.length);
        let valorTotal = parseInt(valorItem)*quantidade;
        let listaProdutos = document.getElementById('lista-produtos');
        let itemHTML = `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">
            R$${valorTotal}</span></section>`;
        listaProdutos.innerHTML += itemHTML;
        let totalNovo = totalInicial + valorTotal;
        let valorCarrinho = document.getElementById('valor-total');
        valorCarrinho.innerHTML = 'R$' + totalNovo;
    }
}

function limpar() {
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';
    let valorCarrinho = document.getElementById('valor-total');
    valorCarrinho.innerHTML = 'R$0';
}