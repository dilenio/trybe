// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let testArray = [2, 3, 6, 7, 10, 1];

function minorValue(numbers){
  let higherNumber = 0;
  let higherPosition = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
      higherPosition = i;
    }
  }

  return higherPosition;
}

console.log(minorValue(testArray))