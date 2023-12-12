//Arrow function
const felizNatal = () => console.log("Feliz natal");

felizNatal();

const saudacao = (nome) => `Fala ${nome}, blz?!!`;
console.log(saudacao("maria"));

//funcao com corpo:
const somar = (numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar([1, 2, 3, 4, 5, 6]));

// -> outra forma
const somar1 = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar1(1, 2, 3, 4, 5, 6, 1));
