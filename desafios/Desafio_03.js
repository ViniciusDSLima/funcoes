function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potencia01 = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(2)(2));
console.log(potencia(2)(3));
