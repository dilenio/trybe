// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let testArray = [2, 4, 6, 7, 10, 0, -3];

function minorValue(numbers){
  let lowestNumber = 0;
  let lowestPosition = 0;

  for (let index in numbers) {
    if (numbers[index] < lowestNumber) {
      lowestNumber = numbers[index];
      lowestPosition = index;
    }
  }

  return lowestPosition;
}

console.log(minorValue(testArray))
