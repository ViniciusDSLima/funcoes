//Funcao impura, ja que depende do Random (funcoes de dependem de coisas aleatorias, sempre serao impuras.)
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;

  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(5, 6));
console.log(gerarNumeroAleatorio(5, 6));
console.log(gerarNumeroAleatorio(5, 6));
console.log(gerarNumeroAleatorio(5, 6));
console.log(gerarNumeroAleatorio(5, 6));
console.log(gerarNumeroAleatorio(5, 6));