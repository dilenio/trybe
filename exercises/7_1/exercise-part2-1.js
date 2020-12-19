const fatorial = (number) => {
  let resultado = 1;
  for (let index = 1; index <= number; index += 1) {
    resultado *= index;
  }
  return resultado;
}

console.log(fatorial(5));
