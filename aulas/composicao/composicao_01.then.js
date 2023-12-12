function composicaoAsync(...fns) {
  return function (valor) {
    return fns[0](valor).then(fns[1]).then(fns[2]);
  };
}

function gritarAsync(texto) {
  return new Promise((resolve) => {
    resolve(texto.toUpperCase());
  });
}

function tornarLetno(texto) {
  return new Promise((resolve) => {
    resolve(texto.split("").join(" "));
  });
}

function enfatizarAsync(texto) {
  return new Promise((resolve) => resolve(`${texto}!!!!!!!`));
}

const resultadoAsync = composicaoAsync(
  gritarAsync,
  enfatizarAsync,
  tornarLetno
)("PARA");

resultadoAsync.then((resultado) => console.log(resultado));
