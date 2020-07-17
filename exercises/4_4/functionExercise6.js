// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5;

function sum(number){
  let result = '';
  let sum = 0;
  for ( let i = 1; i <= number; i += 1 ){

    if ( i === number ){
      result += i;
    } else {
      result += i + ' + ';
    }
    sum += i;
  }
  return result + ' = ' + sum;
}

console.log(sum(n));