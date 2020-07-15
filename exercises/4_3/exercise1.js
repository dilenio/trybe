// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let number = 5;
let asterisk;

for (let index = 0; index < number ; index++){
  asterisk = '';
  for (let indexTwo = 0; indexTwo < number ; indexTwo++){
    asterisk += '*';
  }
  console.log(asterisk);
}