let qtdeExecucoes = 0;

//Funcao totalmente pura, ja que eu tenho o controle do retorno e o retorno eh totalmente dependente;
//A funcao tornou-se impura por causa do criterio de observabilidade
function somar(a, b) {
  qtdeExecucoes++;
  return a + b;
}
console.log(qtdeExecucoes);
console.log(somar(10, 4));
