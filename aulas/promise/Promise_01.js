let a = 1;

console.log(a);

let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3);
}); // objeto

p.then(function (valor) {
  console.log(valor);
});

p.then((valor) => console.log(valor));
