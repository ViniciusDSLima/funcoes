function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const soma = somar(2)(4)(6);
console.log(soma);
