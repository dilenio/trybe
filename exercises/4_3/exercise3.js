// Agora inverta o lado do triângulo.
// Atenção! Note que esse exercício é bem mais complexo que o anterior!
// Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let number = 5;
let asteriskSpaces;

for (let index = 0; index < number; index += 1){
  asteriskSpaces = '';
  for (let indexSpaces = 1; indexSpaces < number - index; indexSpaces += 1){
    asteriskSpaces += ' ';
  }
  for (let indexTwo = 0; indexTwo <= index; indexTwo += 1){
    asteriskSpaces += '*';
  }
  console.log(asteriskSpaces);
}