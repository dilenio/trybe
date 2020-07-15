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


// let n = 6;
// let lineIndex;
// let lineColumn;
// let lineInput = '';
// let symbol = '*';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight= midOfMatrix;

// for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
//   for (lineColumn = 1; lineColumn <= n; lineColumn++) {
//     if (lineColumn > controlRight && lineColumn < controlLeft) {
//       lineInput = lineInput + symbol;
//     } else {
//       lineInput = lineInput + ' ';
//     }
//   }
//   console.log(lineInput);
//   lineInput = '';
//   controlRight--;
//   controlLeft++;
// };