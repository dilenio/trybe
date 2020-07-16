// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let testArray = [2, 3, 6, 7, 10, 1];

function minorValue(numbers){
  let higherNumber = 0;
  let higherPosition = 0;

  for (let index in numbers) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
      higherPosition = index;
    }
  }

  return higherPosition;
}

console.log(minorValue(testArray))
