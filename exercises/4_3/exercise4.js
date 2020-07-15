//  Depois, faça uma pirâmide com n asteriscos de base

let number = 8;
let asteriskSpaces;

for (let index = 0; index < number; index += 2){
  asteriskSpaces = '';
  for (let indexSpaces = 1; indexSpaces < number - index; indexSpaces += 2){
    asteriskSpaces += ' ';
  }
  for (let indexTwo = 0; indexTwo <= index; indexTwo += 1){
    asteriskSpaces += '*';
  }
  console.log(asteriskSpaces);
}