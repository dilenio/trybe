// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.

let numero1 = 91;
let numero2 = 55;
let numero3 = 3;

let isEven = false;

isEven = ((numero1 % 2 === 0) || (numero2 % 2 === 0) || (numero3 % 2 === 0) ? true : false );

console.log(isEven);

