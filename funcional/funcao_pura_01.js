const PI = 3.14;

//funcao impura - PI eh um valor externo
function areaCirc1(raio) {
  return raio * raio * PI;
}

console.log(areaCirc1(10));

//Continua sendo um funcao impura, porem aceitavel, Ja que o valor de PI dificilmente seria alterado.
function areaCirc2(raio) {
  return raio * raio * Math.PI;
}

console.log(areaCirc2(10));

//Funcao pura, ja que o retorno so eh dependente dos valores de entrada.ddd
function areaCirc3(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCirc3(10, 2));
