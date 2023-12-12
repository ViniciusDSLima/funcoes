const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;

console.log(nums.map(dobro));

const nomes = ["ana", "bia", "gui", "Lia", "Rafa"];
const primeiraLetra = (texto) => nomes[0];

const letras = nomes.map(primeiraLetra);
console.log(letras);

console.log("---------------------------------------");

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
console.log(carrinho.map(getNome));

const getPreco = (item) => item.preco;
console.log(carrinho.map(getPreco));

console.log("---------------------------------------");

const getQtde = (item) => item.qtde;
console.log(carrinho.map(getQtde));

console.log("---------------------------------------");
const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

const mapeamento = (item) => {
  return { nome: item.nome, preco: item.preco };
};

console.log(carrinho.map(mapeamento));

Array.prototype.myMap = function (fn) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(` ====> ${result}`);
  }
  return mapped;
};

const getNome1 = (item) => item.nome;
console.log(carrinho.myMap(getNome1));
