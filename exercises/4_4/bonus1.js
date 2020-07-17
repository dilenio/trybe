// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.


function romanos(numbers){

  let romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  let arrayNumbers = [];

  // cria um vetor com os números ordinários
  for (let index in numbers) {
    arrayNumbers[index] = romanNumbers[numbers[index]];
  }

  // Verifica um a um dos números ordinários e soma ou subtrai
  for (let indice = 0; indice < arrayNumbers.length; indice++){
      if (arrayNumbers[indice] < arrayNumbers[indice + 1]){
        sum -= arrayNumbers[indice];
      } else {
        sum += arrayNumbers[indice];
      }
  }

  return sum;
}

console.log(romanos('MMXVIII'));