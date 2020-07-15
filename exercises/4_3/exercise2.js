// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let number = 5;
let asterisk;

for (let index = 0; index < number; index += 1){
  asterisk = '';
  for (let indexTwo = 0; indexTwo <= index; indexTwo += 1){
    asterisk += '*';
  }
  console.log(asterisk);
}