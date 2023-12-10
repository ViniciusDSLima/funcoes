const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;

const qtdeMaiorOuIgualQuatro = (item) => item.qtde >= 4;

const funcaoFilter = carrinho.filter(qtdeMaiorOuIgualQuatro).map(getNome);

const funcaoFilter2 = carrinho
  .filter((item) => item.qtde >= 4)
  .map(getNome);

console.log(funcaoFilter);

console.log(funcaoFilter2);