// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayTest = [2, 3, 2, 5, 8, 2, 3];

function repeatValue(numbers){
  let repeatedNumber = 0;
  let countNumber = 0;
  let countNumberTemp = 0;

  for ( let index in numbers ){
    let verifyNumber = numbers[index];
    for ( let index2 in numbers ){
      if ( numbers[index2] === verifyNumber ){
        countNumberTemp += 1;
      }
    }

    if(countNumberTemp > countNumber){
      countNumber = countNumberTemp;
      repeatedNumber = numbers[index];
    }
    countNumberTemp = 0;
  }

  return repeatedNumber;
}

console.log(repeatValue(arrayTest));