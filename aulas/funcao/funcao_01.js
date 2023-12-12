let a = 4;
console.log(a);

//function declaration
function bomDia() {
  console.log("Bom dia!");
}

bomDia();

//function expression
const boaTarde = function () {
  console.log("Boa Tarde!");
};

boaTarde();

function somar(a, b) {
  return a + b;
}

const resultado = somar(3, 4);
console.log(resultado);

//caso eu nao passe o valor de b, soma-se a + undefined = NaN. (not a number)
//para reverter isso:

function somar1(a, b = 0) {
  return a + b;
}

const resultado1 = somar(3);
console.log(resultado1);
