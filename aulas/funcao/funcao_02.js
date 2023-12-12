function bomDia() {
  console.log("bom dia");
}

const boaTarde = function () {
  console.log("boa tarde");
};

//Passar uma funcao como paramentro para outra funcao
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(2);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retorar numa funcao a partir de uma outra funcao
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
