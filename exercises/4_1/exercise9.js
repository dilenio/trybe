//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

let numero1 = 90;
let numero2 = 56;
let numero3 = 2;

let isOdd = false;

isOdd = ((numero1 % 2 !== 0) || (numero2 % 2 !== 0) || (numero3 % 2 !== 0) ? true : false );

console.log(isOdd);