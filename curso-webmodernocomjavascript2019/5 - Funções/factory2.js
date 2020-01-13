function criarProduto(nome = 'default', preco = 0) {
    return {
        nome,
        preco,
        desconto: preco * 0.05
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))